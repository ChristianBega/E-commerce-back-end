const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

//http://localhost:3001/api/categories
router.get("/", async (req, res) => {
  // find all categories
  // include associated Products
  try {
    const categoriesData = await Category.findAll();
    return res.json(categoriesData);
  } catch (err) {
    res.status(500).json(err);
    console.log("Testing Error");
    //catch error here
  }
});
//http://localhost:3001/api/categories/:id -> param = :id = (res.param.id)
router.get("/:id", async (req, res) => {
  //res.param.id
  // find one category by its `id` value
  // be sure to include its associated Products

  // try {
  //   const userData = await User.findByPk(req.params.id);
  //   if (!userData) {
  //     res.status(404).json({ message: "No user with this id!" });
  //     return;
  //   }
  //   res.status(200).json(userData); //
  // } catch (err) {
  //   res.status(500).json(err);
  // }
  try {
    const categoriesData = await Category.findByPk(req.params.id);
    res.status(200).json(categoriesData);
  } catch (error) {}
});

//http://localhost:3001/api/categories
router.post("/", (req, res) => {
  //req.body
  // create a new category
});

//http://localhost:3001/api/categories/:id -> param
router.put("/:id", (req, res) => {
  //req.body
  //where
  // update a category by its `id` value
});

//http://localhost:3001/api/categories/:id -> param
router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
