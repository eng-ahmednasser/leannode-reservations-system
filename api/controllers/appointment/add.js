module.exports = {
  friendlyName: "Create appointment",
  description: "Create a new appointment.",

  inputs: {
    slotId: {
      type: "string",
      required: true,
    }
  },

  exits: {
    invalid: {
      responseType: "badRequest",
      description: "The provided inputs contains data are invalid.",
    },
    success: {
      responseType: "ok",
      description: "The provided inputs are valid.",
    },
  },

  fn: async function ({ slotId }, exits) {
    try {
      const appointment = await sails.helpers.reserveAppointment.with({
        req: this.req,
        slotId
      });
      return this.res.successResponse({
        message: this.req.i18n.__("mission_success"),
        data: appointment
      });
    } catch (error) {
      return this.res.badRequest(error);
    }
  },
};
