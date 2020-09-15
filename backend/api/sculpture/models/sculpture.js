"use strict";
const { createSlug } = require("../../../lib/models/sluggable");

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    async beforeCreate(data) {
      await createSlug(null, data);
    },
    async beforeUpdate(params, data) {
      await createSlug(params, data);
    },
  },
};
