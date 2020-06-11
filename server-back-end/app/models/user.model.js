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
    },
      
          home: {
      type: Sequelize.BOOLEAN
    },
      
          backyard: {
      type: Sequelize.BOOLEAN
    },
          work: {
      type: Sequelize.BOOLEAN
    },
          time: {
      type: Sequelize.BOOLEAN
    },
          cats: {
      type: Sequelize.BOOLEAN
    },
      
          dogs: {
      type: Sequelize.BOOLEAN
    },
      
          children: {
      type: Sequelize.BOOLEAN
    },
      
          foster: {
      type: Sequelize.BOOLEAN
    },
      
          adoption: {
      type: Sequelize.BOOLEAN
    },
  });

  return User;
};
