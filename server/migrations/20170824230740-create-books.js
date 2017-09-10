
module.exports = {
  up: (queryInterface, Sequelize) => {
   queryInterface.createTable('Books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      author: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      booktitle: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      isbn: {
        type: Sequelize.STRING,
        allowNull: false,
        unique:true,
      },
      publisher: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      publishdate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      numberofpages: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      imageurl: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      category:{
      type: Sequelize.STRING,
      allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      bookid : {
        type : Sequelize.INTEGER,
        OnDelete : 'CASCADE',
        references : {
          model : "Books",
          key : "id",
          as : "bookid"
        },

      }
    });
  },
  down: (queryInterface, Sequelize ) => {
    queryInterface.dropTable('Books');
  }
};