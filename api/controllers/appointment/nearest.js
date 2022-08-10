module.exports = {
  friendlyName: "Nearest available appointments",

  description: "Nearest available appointments.",

  inputs: {},

  exits: {
    success: {
      responseType: "ok",
      description: "Appointment added successfully.",
    },
  },

  fn: async function (inputs, exits) {
    try {
      const appointments = await sails.helpers.findNearestAppointments.with();
      return this.res.successResponse({
        data: appointments,
      });
    } catch (error) {
      return this.res.badRequest(error);
    }
  },
};
