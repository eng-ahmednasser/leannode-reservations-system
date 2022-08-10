module.exports.policies = {
  "*": "setLocale",

  "normal-auth": {
    login: ["setLocale", "inputValidation"],
    register: ["setLocale", "inputValidation"],
  },

  user: {
    "show-details": ["setLocale", "isAuthenticated", "isNormalUser"],
    update: ["setLocale", "isAuthenticated", "inputValidation", "isNormalUser"],
  },

  admin: {
    login: ["setLocale", "inputValidation"],
    'search-user': ['setLocale', 'isAuthenticated', 'inputValidation', 'isAdmin'],
  },

  appointment: {
    add: ['setLocale', 'isAuthenticated', 'inputValidation', 'isNormalUser'],
    nearest: ['setLocale', 'isAuthenticated', 'isNormalUser'],
  }
};
