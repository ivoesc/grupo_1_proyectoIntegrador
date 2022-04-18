const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op, Association } = require("sequelize");
const Movies = db.Movie;
const Genres = db.Genre;
const Actors = db.Actor;
const Director = db.Director;
const Categories = db.Category

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productsController = {
	index: (req, res) => {

	},

	detail: async (req, res) => {
		const product = await Movies.findByPk(req.params.id, {include: ['director', 'genre', {association: 'actors'}]});
		
		return res.render('movie-detail', {product});
	}, 

	asientos: (req, res) => {

	},

	create: async (req, res) => {
        const promGenres = Genres.findAll();
		const promActors = Actors.findAll();
		const promDirectors = Director.findAll();
		const promCategories = Categories.findAll()
		
		Promise
        .all([promGenres, promActors, promDirectors, promCategories])
        .then(([allGenres, allActors, allDirectors, allCategories]) => {
            return res.render('product-create-form', {allGenres, allActors, allDirectors, allCategories})
		})
        .catch(error => res.send(error))
		
		//res.render('product-create-form');
    },

	store: async (req, res) => {
		
		await Movies.create({
				name: req.body.name,
                description: req.body.description,
                director_id: req.body.director,
                genre_id: req.body.genre,
                duration: req.body.duration,
                category_id: req.body.category,
				price: req.body.price,
                trailer: req.body.trailer,
                poster: req.files.poster[0].filename,
                background: req.files.background[0].filename
		}) 
	},

	edit: (req, res) => {

	},

	update: (req, res) => {

	},

	delete: (req, res) => {

	}
}

/*const productsController = {
    index: (req, res) => {

    },
    
    detail: (req, res) => {
        const productIdToFind = req.params.id;
		const product = products.find( (p) => p.id == productIdToFind );

		return res.render('movie-detail', {product});
    },

    asientos: (req, res) => {
		const productIdToFind = req.params.id;
		const product = products.find( (p) => p.id == productIdToFind );
		
        res.render('carrito', {product});
    },

    create: (req, res) => {
        res.render('product-create-form');
    },

    store: (req, res) => {
        const productToCreate = (req.body);

		productToCreate.price = Number(req.body.price);
        productToCreate.duration = Number(req.body.duration);
		
		productToCreate.image = req.files.image[0].filename;
		productToCreate.background = req.files.background[0].filename;

		//asignar id
		productToCreate.id = productsController.asignarIdProducto(productToCreate);
		const ultimoElementoDeArray = products [products.length - 1];
		const nuevold = ultimoElementoDeArray.id + 1;

		products.push(productToCreate);

		//guardar producto
		productsController.guardarProducto()

		return res.send(products);
    },
    
	asignarIdProducto(productToCreate) {
		return products[products.length - 1].id +1;
	},

    edit: (req, res) => {
        const productIdToFind = req.params.id;
		const product = products.find((p) => p.id == productIdToFind);
		if (!product) {
			return res.send('NO EXISTE PELÍCULA CON ID ' + productIdToFind)
		}

		res.render('product-edit-form', {product, titulo: "Editar película"})
    },

    update: (req, res) => {
        const productToEdit = (req.body);

		productToEdit.price = Number(req.body.price);
        productToEdit.duration = Number(req.body.duration);

		productToEdit.image = req.files.image[0].filename;
		productToEdit.background = req.files.background[0].filename;

		const idProducto = req.params.id;
		const indiceDelProducto = products.findIndex((p) => p.id == idProducto);

		products[indiceDelProducto] = {...products[indiceDelProducto], ...req.body};

		productsController.guardarProducto()

		return res.send(products)
    },
	
	guardarProducto() {
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2))
	},

    delete: (req, res) => {
		const idProducto = req.params.id;
		const indiceDelProducto = products.findIndex((product) => product.id == idProducto);

		products.splice(indiceDelProducto, 1)
		//products.pop(products[indiceDelProducto])

		productsController.guardarProducto()

		return res.send(products)
    },
	
};*/



module.exports = productsController;