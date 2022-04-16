const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const Movies = db.Movie;
const Genres = db.Genre;
const Actors = db.Actor;

const mainController = {
	index: async (req, res) => {
		const estrenos = await Movies.findAll({
			where: {category_id: 1}
		});

		const proximamente = await Movies.findAll({
			where: {category_id: 2}
		});

		const reestrenos = await Movies.findAll({
			where: {category_id: 3}
		})

		return res.render( 'home', {estrenos, proximamente, reestrenos})
	}


}

// old controller (JSON)
/*const mainController = {
	index: (req, res) => {
		
		const estrenos = products.filter((product) => 
			product.category === 'estrenos'
		);

		const proximamente = products.filter((product) => 
			product.category === 'próximamente'
		);

		const reestrenos = products.filter((product) => 
			product.category === 'reestrenos'
		);

		return res.render( 'home', {estrenos, proximamente, reestrenos})
	},
	search: (req, res) => {
		// Do the magic
	},
};
*/

module.exports = mainController;