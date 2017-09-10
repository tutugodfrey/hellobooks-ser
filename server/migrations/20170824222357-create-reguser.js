
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
        type: Sequelize.ENUM("admin", "regular"),
        allowNull:false,
      },
      username: {
        type: Sequelize.STRING,
        allowNull:false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      userlevel: {
        type: Sequelize.ENUM("gold", "silver", "platinum"),
        allowNull:false,
      },
      imageurl: {
        type: Sequelize.STRING,
        allowNull: true,
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