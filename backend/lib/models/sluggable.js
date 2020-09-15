const slugify = require("slugify");

module.exports = {
  async createSlug(params, data) {
    data.slug = slugify(data.title, { lower: true });
  },
};
