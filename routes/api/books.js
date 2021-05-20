const router = require("express").Router();
const {create, findAll, remove} = require("../../controllers/booksController");

// router.route("/:id");
router.get("/", findAll);
router.post("/", create);
router.delete("/:id", remove);

module.exports = router;
