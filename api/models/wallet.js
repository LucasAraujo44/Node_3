'use strict';
module.exports = (sequelize, DataTypes) =>{
  const Wallet = sequelize.define('Wallet',{
    name: DataTypes.STRING,
    cpf: DataTypes.STRING,
    birthdate: DataTypes.DATE
  }, {});

  Wallet.associate = function(models){

  };
  return Wallet;
};

//const {
 // Model
//} = require('sequelize');
//module.exports = (sequelize, DataTypes) => {
//  class Wallet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
   // static associate(models) {
      // define association here
 /*    }
  }
  Wallet.init({
    name: DataTypes.STRING,
    cpf: DataTypes.STRING,
    birthdate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Wallet',
  });
  return Wallet;
}; */