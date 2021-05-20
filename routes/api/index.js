const router = require("express").Router();
const bookRoutes = require("./books");
const gBooksRoutes = require("./gbooks");

// Book routes
router.use("/books", bookRoutes);
router.use("/gbooks", gBooksRoutes)

module.exports = router;
