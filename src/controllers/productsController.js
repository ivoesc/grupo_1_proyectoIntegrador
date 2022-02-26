const productsController = {
    detail: (req, res) => {
        res.render('movie-detail');
    },

    cart: (req, res) => {
        res.render('carrito');
    },

    create: (req, res) => {
        res.render('product-create-form');
    },

    edit: (req, res) => {
        res.render('product-edit-form');
    },

    delete: {

    }

};

module.exports = productsController;