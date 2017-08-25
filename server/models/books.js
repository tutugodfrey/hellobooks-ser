
module.exports = (sequelize, DataTypes) => {
  const Books = sequelize.define('Books', {
    {
      author: DataTypes.STRING,
      allowNull:false,
    },
   {
    booktitle: DataTypes.STRING,
    allowNull:false,
  },
   {
    isbn: DataTypes.STRING,
    allowNull:false,
  },
  {
    publisher: DataTypes.STRING,
    allowNull:false,
  }
  {
    publishdate: DataTypes.DATE,
    allowNull:false,
  },
  {
    numberofpages: DataTypes.INTEGER,
    allowNull:false,
  },
  {  
    quantity: DataTypes.INTEGER,
    allowNull:true,
  }
  {
    description: DataTypes.STRING,
    allowNull:true,
  }
  }, {
    classMethods: {
      associate: models => {
        // associations can be defined here
      }
    }
  });
  return Books;
};