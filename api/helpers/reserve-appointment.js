module.exports = {
  friendlyName: "reserve an appointment",
  description: "reserve an appointment",

  inputs: {
    req: {
      type: "ref",
      friendlyName: "Request",
      description: "A reference to the request object (req).",
      required: true,
    },
    slotId: {
      type: "string",
      required: true
    }
  },

  exits: {
    invalid: {
      responseType: "badRequest",
      description: "can not reserve an appointment.",
    },
  },

  fn: async function (inputs, exits) {
    const {req, slotId:id} = inputs;
    const userId = req.user.id
    const {status:serviceStatus, types} = sails.config.globals.serviceSettings;
    const appointmentRef = db.collection('appointments');
    const snapshotQuery = await appointmentRef.where('id', '==', id).get();
    if (!snapshotQuery.size) return exits.invalid({ message: req.i18n.__('slot_not_found') });
    const targetSlot = snapshotQuery.docs[0].data();
    const snapshotForUserServices = await appointmentRef
      .where('userId', '==', userId)
      .where('day', '==', targetSlot.day)
      .where('status', '==', serviceStatus.reserved)
      .get();

    if(snapshotForUserServices.size === Object.keys(types).length) return exits.invalid({ message: req.i18n.__('booked_all_services_per_date') });

    if(snapshotForUserServices.size && snapshotForUserServices.docs.find(doc => doc.data().serviceID === targetSlot.serviceID)) {
      return exits.invalid({ message: req.i18n.__('already_have_appointment') });
    }

    const querySnapshot = await appointmentRef
      .where('id', '==', id)
      .where('status', '==', serviceStatus.pending)
      .get();
    if(!querySnapshot.size) return exits.invalid({ message: req.i18n.__('slot_is_reserved') });
    await querySnapshot.docs[0].ref.update({ userId, status: serviceStatus.reserved });
    const updated = await querySnapshot.docs[0].ref.get()
    return exits.success(updated.data());
  },
};
