const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    console.log("findall")
    db.Book
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    console.log("create")
    console.log(req.body)
    db.Book
      .create({
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        image: req.body.image,
        link: req.body.link
    })
        .then(() => res.send("Book saved to list!"))
        .catch((err) => res.send(err));
  },

  remove: function(req, res) {
    console.log("remove")
    db.Book
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
