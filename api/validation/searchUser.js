module.exports = joi
  .object({
    search: joi.string(),
    page: joi.number().min(1).required(),
    limit: joi.number().min(1).required(),
  })
  .unknown();
