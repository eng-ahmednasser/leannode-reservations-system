
function algoliaSearchIndex (query, searchCriteria) {
  return algoliaIndex.search(query, searchCriteria);
};

module.exports = {
  friendlyName: "list & search users",
  description: "This API must fetch and search data from Algolia \n" +
    "Normal users shouldn’t be able to access this api.",

  inputs: {
    search: {
      type: "string",
    },
    page: {
      type: "number",
      required: true,
    },
    limit: {
      type: "number",
      required: true,
    },
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

  fn: async function (inputs, exits) {
    try {
      const { page = 0 ,limit = 1 , search = ''} = inputs
      const attributesToRetrieve = ['id', 'username', 'email', 'age']
      const { hits: users = []} = await algoliaSearchIndex(search,{
        attributesToHighlight: 'username,email',
        page: page !== 0 ? page - 1 : 0,
        hitsPerPage: limit,
        attributesToRetrieve
      });

      return this.res.successResponse({
        message: this.req.i18n.__("mission_success"),
        data: users.map(u => _.pick(u, attributesToRetrieve)),
      });
    } catch (error) {
      return this.res.serverError({
        message: this.req.i18n.__("database_error"),
        data: { error },
      });
    }
  },
};
