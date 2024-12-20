const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../../config/db');

class DataAccessMechanismCharacteristic extends Model {}

DataAccessMechanismCharacteristic.init({
    dacc_mechsm_cd: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    dacc_mechsm_charac_cd: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        // autoIncrement: true, // Equivalent to GENERATED BY DEFAULT AS IDENTITY
        allowNull: false
    },
    dacc_mechsm_charac_nm: {
        type: DataTypes.STRING,
        allowNull: true
    },
    dacc_mechsm_charac_shrt_nm: {
        type: DataTypes.STRING,
        allowNull: true
    },
    dacc_mechsm_charac_desc: {
        type: DataTypes.STRING,
        allowNull: true
    },
    dacc_mechsm_charac_mand_ind: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    dacc_mechsm_charac_scalar_ind: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    }
}, {
    sequelize,
    tableName: 'dacc_mechsm_charac',
    freezeTableName: true,
    timestamps: false,
    underscored: true
});

module.exports = DataAccessMechanismCharacteristic;
