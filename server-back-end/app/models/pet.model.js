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
    }
  });

  return Pet;
};
