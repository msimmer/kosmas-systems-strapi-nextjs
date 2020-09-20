const slugify = require("slugify");

module.exports = {
  async createSlug(_params, data) {
    data.slug = slugify(data.title, { lower: true });
  },
};
