const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::content-item.content-item', ({ strapi }) => ({
  async find(ctx) {
    const entities = await strapi.db.query('api::content-item.content-item').findMany({
      populate: {
        content: {
          populate: {
            stepNumber: {
              populate: '*', // ensures stepImage is included
            },
          },
        },
      },
    });
    return entities;
  },
})); 