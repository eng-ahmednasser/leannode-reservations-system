const moment = require('moment')

module.exports = {
  friendlyName: "find-nearest-appointments",
  description: "find-nearest-appointments",

  inputs: {},

  exits: {
    invalid: {
      responseType: "badRequest",
      description: "can not find the nearest appointments.",
    },
  },

  fn: async function (inputs, exits) {
    const appointmentRef = db.collection('appointments');
    const { status } = sails.config.globals.serviceSettings;
    const nextDays = [...Array(3)].map((_,i) => moment().add(i+1, 'days'))
    await sails.helpers.createSlots.with({ days: nextDays});


    const querySnapshotById = await appointmentRef
      .where('status', '==', status.pending)
      .where('day','in', nextDays.map(d => d.format('YYYY-MM-DD')))
      .orderBy('dateTime', 'asc')
      .get();

    return exits.success(
    querySnapshotById.docs.map(doc => {
      const data = doc.data();
      data.docId = doc.id;
      data.dateTime = data.dateTime.toDate()
      return data;
    }));
  },
};
