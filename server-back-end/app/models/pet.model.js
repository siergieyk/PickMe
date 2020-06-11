module.exports = (sequelize, Sequelize) => {
  const Pet = sequelize.define("pet", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    },
    image: {
      type: Sequelize.STRING
    },
    specie: {
        type: Sequelize.STRING
    },
          breed: {
        type: Sequelize.STRING
    },
          age: {
        type: Sequelize.STRING
    },
          weight: {
        type: Sequelize.STRING
    },
          coat: {
        type: Sequelize.STRING
    },
          energy: {
        type: Sequelize.STRING
    },
          cats: {
        type: Sequelize.STRING
    },
          dogs: {
        type: Sequelize.STRING
    },
          children: {
        type: Sequelize.STRING
    },
          other: {
        type: Sequelize.STRING
    },
          foster: {
        type: Sequelize.STRING
    },
          adoption: {
        type: Sequelize.STRING
    },
          phone: {
        type: Sequelize.STRING
    },
          email: {
        type: Sequelize.STRING
    }
  });

  return Pet;
};
