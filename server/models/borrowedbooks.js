
module.exports = (sequelize, DataTypes) => {
  const Borrowedbooks = sequelize.define('Borrowedbooks', {
    
      userid: {
        type: DataTypes.INTEGER,
      allowNull:false,
    },
    
    bookid: {
      type: DataTypes.INTEGER,
    allowNull:false,
  },
  
      returned: {
        type: DataTypes.BOOLEAN,
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