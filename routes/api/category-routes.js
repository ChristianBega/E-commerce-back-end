const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

//http://localhost:3001/api/catergories
router.get("/", (req, res) => {
  // find all categories
  // be sure to include its associated Products
});
//http://localhost:3001/api/catergories/:id -> param = :id = (res.param.id)
router.get("/:id", (req, res) => {
  //res.param.id
  // find one category by its `id` value
  // be sure to include its associated Products
});


//http://localhost:3001/api/catergories
router.post("/", (req, res) => {
  //req.body
  // create a new category
});

//http://localhost:3001/api/catergories/:id -> param
router.put("/:id", (req, res) => {
  //req.body 
  //where
  // update a category by its `id` value
});


//http://localhost:3001/api/catergories/:id -> param 
router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
