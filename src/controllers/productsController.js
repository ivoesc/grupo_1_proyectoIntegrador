const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productsController = {
    index: (req, res) => {

    },
    
    detail: (req, res) => {
        const productIdToFind = req.params.id;
		const product = products.find( (p) => p.id == productIdToFind );

		return res.render('movie-detail', {product});
    },

    cart: (req, res) => {
        res.render('carrito');
    },

    create: (req, res) => {
        res.render('product-create-form');
    },

    store: (req, res) => {
        const productToCreate = (req.body);

		productToCreate.price = Number(req.body.price);
        productToCreate.duration = Number(req.body.duration);
		
		productToCreate.image = req.file.filename;
		//asignar id
		productToCreate.id = productsController.asignarIdProducto(productToCreate);
		const ultimoElementoDeArray = products [products.length - 1];
		const nuevold = ultimoElementoDeArray.id + 1;

		products.push(productToCreate);

		//guardar producto
		productsController.guardarProducto()

		return res.send(products);
    },

    guardarProducto() {
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2))
	},
    
	asignarIdProducto(productToCreate) {
		return products[products.length - 1].id +1;
	},

    edit: (req, res) => {
        res.render('product-edit-form');
    },

    delete: {

    }

};

module.exports = productsController;