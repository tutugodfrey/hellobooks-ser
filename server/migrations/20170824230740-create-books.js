
module.exports = {
  up: (queryInterface, Sequelize) => {
   queryInterface.createTable('Books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      author: {
        type: Sequelize.STRING
      },
      booktitle: {
        type: Sequelize.STRING
      },
      isbn: {
        type: Sequelize.STRING
      },
      publisher: {
        type: Sequelize.STRING
      },
      publishdate: {
        type: Sequelize.DATE
      },
      numberofpages: {
        type: Sequelize.INTEGER
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      imageurl: {
        type: Sequelize.STRING,
      }
      description: {
        type: Sequelize.STRING
      },
      category:{
      type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
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
  down: (queryInterface /*, Sequelize */) => {
    queryInterface.dropTable('Books');
  }
};