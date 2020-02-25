'use strict';
module.exports = (sequelize, DataTypes) => {
	const Rating = sequelize.define('Rating', {
		stars: DataTypes.INTEGER
	}, {});

	Rating.associate = function(models) {
		models.Rating.belongsTo(models.Burger);
	};

	return Rating;
};
