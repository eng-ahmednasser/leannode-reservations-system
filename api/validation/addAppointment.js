module.exports = joi
  .object({
    slotId: joi.string().required(),
  })
  .unknown();
