const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Owned_Plants extends Model {}

Owned_Plants.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    user_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      species:{
        type: DataTypes.STRING,
        allowNull: false
    },
    variety: {
        type: DataTypes.STRING
    },
    common_name:{
        type: DataTypes.STRING,
    },
    watering: {
        type: DataTypes.ENUM('Low', 'Medium', 'High')
    },
    temperature: {
        type: DataTypes.ENUM('Low', 'Medium', 'High')
    },
    humidity: {
        type: DataTypes.ENUM('Low', 'Medium', 'High')
    },
    light: {
        type: DataTypes.ENUM('Low', 'Medium', 'High')
    },
    description: {
        type: DataTypes.STRING,
    },
    care: {
        type: DataTypes.STRING,
        allowNull: true
    }
},
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Owned_Plants',
    }
);

module.exports = Owned_Plants;
