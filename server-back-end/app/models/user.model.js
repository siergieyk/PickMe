module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    id: {
    type: Sequelize.STRING,
    primaryKey: true
    
    },
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });

  return User;
};
