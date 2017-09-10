
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
        type: DataTypes.ENUM("admin", "regular"),
        allowNull:false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull:false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userlevel: {
        type: DataTypes.ENUM("gold", "silver", "platinum"),
        allowNull: false,
    },
    imageurl: {
        type: DataTypes.STRING,
        allowNull: true,
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