/**
 * Global Variable Configuration
 * (sails.config.globals)
 *
 * Configure which global variables which will be exposed
 * automatically by Sails.
 *
 * For more information on any of these options, check out:
 * https://sailsjs.com/config/globals
 */
const moment = require('moment');

module.exports.globals = {
  /****************************************************************************
   *                                                                           *
   * Whether to expose the locally-installed Lodash as a global variable       *
   * (`_`), making  it accessible throughout your app.                         *
   *                                                                           *
   ****************************************************************************/

  _: require("@sailshq/lodash"),

  async: require("async"),

  responseCodes: {
    badRequest: 400,
    serverError: 500,
    forbidden: 403,
    notFound: 404,
    validationError: 422,
    notAuthenticate: 401,
    success: 200,
    create: 201,
  },

  serviceSettings: {
    concurrency: 3, // can serve only 3 users in same slot time
    slotTimeDuration: 30, // 30 min
    startTime: moment().set({hour:9,minute:0}),
    endTime: moment().set({hour:17,minute:0}),
    status: {
      pending: 'pending',
      reserved: 'reserved',
      finished: 'finished',
      cancelled: 'cancelled',
    },
   // TODO:: @AN, make a collection for service types
    types: {
      vaccine1: {
        id: 1,
        name:"Vaccine Dose 1",
      },
      vaccine2: {
        id: 2,
        name: "Vaccine Dose 2"
      },
      vaccine3: {
        id: 3,
        name:"Vaccine Dose 3"
      }
    },
  },

  userRoles: {
    normalUser: "NORMAL_USER",
    adminUser: "ADMIN_USER",
    guestUser: "GUEST_USER",
  },

  /****************************************************************************
   *                                                                           *
   * This app was generated without a dependency on the "async" NPM package.   *
   *                                                                           *
   * > Don't worry!  This is totally unrelated to JavaScript's "async/await".  *
   * > Your code can (and probably should) use `await` as much as possible.    *
   *                                                                           *
   ****************************************************************************/

  async: false,

  /****************************************************************************
   *                                                                           *
   * Whether to expose each of your app's models as global variables.          *
   * (See the link at the top of this file for more information.)              *
   *                                                                           *
   ****************************************************************************/

  models: true,

  /****************************************************************************
   *                                                                           *
   * Whether to expose the Sails app instance as a global variable (`sails`),  *
   * making it accessible throughout your app.                                 *
   *                                                                           *
   ****************************************************************************/

  sails: true,
};
