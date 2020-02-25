'use strict';
module.exports = (sequelize, DataTypes) => {
	const Burger = sequelize.define('Burger', {
		name: DataTypes.STRING,
		isDevoured: DataTypes.BOOLEAN
	}, {});

	Burger.associate = function(models) {
		models.Burger.hasMany(models.Rating);
	};

	return Burger;
};
