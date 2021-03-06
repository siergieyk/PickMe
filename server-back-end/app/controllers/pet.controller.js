const db = require("../models");
const Pet = db.pets;
const Op = db.Sequelize.Op;

// Create and Save a new Pet
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Pet
  const pet = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
    image: req.body.image,
    specie: req.body.specie,
      breed: req.body.breed,
      age: req.body.age,
      weight: req.body.weight,
      coat: req.body.coat,
      energy: req.body.energy,
      cats: req.body.cats,
      dogs: req.body.dogs,
      children: req.body.children,
      other: req.body.other,
      foster: req.body.foster,
      adoption: req.body.adoption,
      phone: req.body.phone,
      email: req.body.email
  };

  // Save Pet in the database
  Pet.create(pet)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Pet."
      });
    });
};

// Retrieve all Pets from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Pet.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Pets."
      });
    });
};

// Find a single Pet with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Pet.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Pet with id=" + id
      });
    });
};

// Update a Pet by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Pet.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Pet was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Pet with id=${id}. Maybe Pet was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Pet with id=" + id
      });
    });
};

// Delete a Pet with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Pet.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Pet was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Pet with id=${id}. Maybe Pet was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Pet with id=" + id
      });
    });
};

// Delete all Pets from the database.
exports.deleteAll = (req, res) => {
  Pet.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Pets were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all pets."
      });
    });
};

// find all published Pet
exports.findAllPublished = (req, res) => {
  Pet.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Pets."
      });
    });
};
