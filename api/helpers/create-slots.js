module.exports = {
  friendlyName: "create initial appointment with slots",
  description: "create initial appointment with slots",

  inputs: {
    days: {
      type: ['ref'],
      required: true
    }
  },

  exits: {
    invalid: {
      responseType: "badRequest",
      description: "Can not create initial appointments with slots.",
    },
  },

  fn: async function ({ days = [] }, exits) {
    if (!days.length) return
    const {startTime, endTime, slotTimeDuration, types: services, status} = sails.config.globals.serviceSettings;
    const appointmentRef = db.collection('appointments');
    const writeBatch = db.batch();
    await Promise.all(days.map( async day => {
      const dateOnly = day.format('YYYY-MM-DD')
      const querySnapshotByDay = await appointmentRef.where('day', '==', dateOnly).limit(1).get()
      if (querySnapshotByDay.size) return
      const startDay = startTime.clone()
      while (startDay < endTime) {
        const date = day.set({
          h: startDay.get('hour'),
          minute: startDay.get('minute'),
          second: 0
        });

        startDay.add(slotTimeDuration, 'minutes')
        Object.values(services).forEach(s => {
          writeBatch.set(appointmentRef.doc(), {
            id: sails.helpers.randomCryptoString.with({size: 32}),
            day: dateOnly,
            dateTime: date.toDate(),
            slotTimeDuration,
            serviceID: s.id,
            status: status.pending
          })
        })
      }

    }))

    await writeBatch.commit()
    return exits.success()
  },
};
