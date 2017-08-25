
module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable('Borrowedbooks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userid: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      bookid: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      returned: {
        type: Sequelize.BOOLEAN,
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      borrowid :{
        type : Sequelize.INTEGER,
        OnDelete : 'CASCADE',
        references : {
          model : "Borrowedbooks",
          key : "id",
          as : "borrowid"
        },

      },
    });
  },
  down: (queryInterface /*, Sequelize */) => {
    queryInterface.dropTable('Borrowedbooks');
  }
};