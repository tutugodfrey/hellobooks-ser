
module.exports = (sequelize, DataTypes) => {

  const Books = sequelize.define('Books', {
    author: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    booktitle: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    isbn: {
      type: DataTypes.STRING,
      allowNull:false,
      unique: true,
    },
    publisher: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    publishdate: {
      type: DataTypes.DATE,
      allowNull:false,
    },
    numberofpages: {
      type: DataTypes.INTEGER,
      allowNull:false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull:true,
    },
    imageurl: {
      type: DataTypes.STRING,
      allowNull:true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull:true,
    },
    category: {
      type: DataTypes.STRING,
      allowNull:true,
    },
  }, {
    classMethods: {
      associate: models => {
        // associations can be defined here
      }
    }
  });
  return Books;
};