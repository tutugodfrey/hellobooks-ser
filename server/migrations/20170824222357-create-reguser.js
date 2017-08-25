
module.exports = {
  up: (queryInterface, Sequelize) => {
     queryInterface.createTable('Regusers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstname: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      lastname: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      usertype: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      username: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      userlevel: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      userid : {
        type : Sequelize.INTEGER,
        OnDelete : 'CASCADE',
        references : {
          model : "Regusers",
          key : "id",
          as : "userid"
        },

      }
    });
  },
  down: (queryInterface, Sequelize) => {
    queryInterface.dropTable('Regusers');
  }
};