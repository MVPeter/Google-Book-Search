const router = require("express").Router();
const {create, findAll, remove} = require("../../controllers/booksController");

// router.route("/:id");
router.get("/books", findAll);
router.post("/books", create);
router.delete("/books/:id", remove);

module.exports = router;
