const router = require("express").Router();
const axios = require("axios");

// require("env").config();

router.get("/search/:type/:title", (req,res) => {
    return axios
        .get(`https://www.googleapis.com/books/v1/volumes?q=in${req.params.type}:${req.params.title}&key=AIzaSyBtB-wrKLz-tULgs_Wxo-rBRFIQufFP1Ls`)
        .then((response) => res.json(response.data))
        .catch((err) => res.send(err));
});

module.exports = router;