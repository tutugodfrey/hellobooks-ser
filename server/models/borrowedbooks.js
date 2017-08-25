
module.exports = (sequelize, DataTypes) => {
  const Borrowedbooks = sequelize.define('Borrowedbooks', {
    {
      userid: DataTypes.INTEGER,
      allowNull:false,
    },
    {
    bookid: DataTypes.INTEGER,
    allowNull:false,
  }
  {
      returned: DataTypes.BOOLEAN,
      allowNull:false,
    }
  }, {
    classMethods: {
      associate: models => {
        // associations can be defined here
        Borrowedbooks.hasMany(models.Regusers, {
          foreignKey : 'userid',

        })
      }
    }
  });
  return Borrowedbooks;
};