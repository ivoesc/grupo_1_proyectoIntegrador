const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const mainController = {
	index: (req, res) => {
		
		const estrenos = products.filter((product) => 
			product.category === 'estrenos'
		);

		const proximamente = products.filter((product) => 
			product.category === 'próximamente'
		);

		return res.render( 'home', {estrenos, proximamente} )
	},
	search: (req, res) => {
		// Do the magic
	},
};

module.exports = mainController;