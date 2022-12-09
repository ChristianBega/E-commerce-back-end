// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Source                Target
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});
//I want tags
//  Target             Source
// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id",
});

Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: "product_id",
});

Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: "tag_id",
});

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
