"use strict";
const { createSlug } = require("../../../lib/models/sluggable");
const { revalidate } = require("../../../lib/models/revalidateable");

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

function memo(prefix) {
  const entries = new Map();
  return {
    set(data) {
      const key = `${prefix}.${data.id}`;
      entries.set(key, { ...data });
    },
    get(data) {
      const key = `${prefix}.${data.id}`;
      const entry = entries.get(key);
      entries.delete(key);
      return entry;
    },
    entries() {
      return entries;
    },
  };
}

const store = memo("article");

module.exports = {
  lifecycles: {
    async beforeCreate(data) {
      await createSlug(null, data);
    },
    async beforeUpdate(params, data) {
      store.set(data);

      await createSlug(params, data);

      // await revalidate(`/comix/${entry.slug}`);
    },
    async afterUpdate(result, params, data) {
      // await revalidate("/comix/");
      console.log("revalidate /comix/");

      const entry = store.get(data);

      console.log("old data", entry.slug);
      console.log("new data", data.slug);

      // await revalidate(`/comix/${entry.slug}`); // Calls old slug
      // console.log("revalidate ", `/comix/${entry.slug}`);

      console.log("entries", store.entries());
      // await revalidate(`/comix/${data.slug}`); // Calls new slug
    },
  },
};
