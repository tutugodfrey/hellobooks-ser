
module.exports = (sequelize, DataTypes) => {
  const Reguser = sequelize.define('Regusers', {
   { 
    firstname: DataTypes.STRING,
    allowNull:false,
   },
    {lastname: DataTypes.STRING,
      allowNull:false,
    },
    {
      email: DataTypes.STRING,
      allowNull:false,
    },
    {
      usertype: DataTypes.STRING,
      allowNull:false,
    },
    {
      username: DataTypes.STRING,
      allowNull:false,
    },
    {
      password: DataTypes.STRING
      allowNull:false,
    },
    {
      userlevel: DataTypes.INTEGER,
      allowNull:false,
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