
module.exports = (sequelize, DataTypes) => {
  const Regusers = sequelize.define('Regusers', {
   
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
   },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    email: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    
    usertype: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    
    password: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    userlevel: {
        type: DataTypes.ENUM(gold, silvel, platinum),
        allowNull: false,
    },
    imageurl: {
        type: DataTypes.STRING,
        allowNull: false,
    }
  }, {
    classMethods: {
      associate: models => {
        Reguser.belongsTo(models.Borrowedbooks, {
          foreignkey : "userid",
          onDelete : "CASCADE",
        });

        // associations can be defined here
      }
    }
  });
  return Regusers;
};