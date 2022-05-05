const path = require('path')

const { check } = require('express-validator');

module.exports = [
    check('name').notEmpty().withMessage('El nombre no puede estar vacío').bail().isAlpha().withMessage("Ingresa un nombre válido").bail(),
    check('description').notEmpty().withMessage('La sinopsis no puede estar vacía').isAlpha().withMessage("Ingresa un texto válido").bail().isLength({ max: 311}).withMessage('La sinopsis debe tener un máximo de 311 caracteres').bail(),
    check('director').notEmpty().withMessage('El director no puede estar vacío').bail(),
    check('actors').notEmpty().withMessage('Los actores no pueden estar vacíos').bail(),
    check('genre').notEmpty().withMessage('El género no puede estar vacío').bail(),
    check('duration').notEmpty().withMessage('La duración no puede estar vacía').bail().isLength({min: 2}).withMessage('La duracion debe tener un mínimo de 2 caracteres').bail(),
    check('category').notEmpty().withMessage('La categoría no puede estar vacía').bail(),
    check('price').notEmpty().withMessage('El precio no puede estar vacío').bail(),
    check('category').notEmpty().withMessage('La categoría no puede estar vacía').bail(),

    check('poster').custom( (value, { req }) => {
        let file = req.files.poster[0].filename;
        let acceptedExtensions = ['.jpg', '.png', '.gif', 'jpeg', 'webp'];
        if (!file) {
            throw new Error ('Tienes que subir un poster');
            } else {
            let fileExtension = path.extname (file.originalname);
            if (!acceptedExtensions.includes (fileExtension)) {
                throw new Error ("Las extensiones de archivo permitidas son " + acceptedExtensions.join(', '));
        }
    }

        return true;
    }),

    check('background').custom( (value, { req }) => {
        let file = req.files.background[0].filename;
        let acceptedExtensions = ['.jpg', '.png', '.gif', 'jpeg', 'webp'];
        if (!file) {
            throw new Error ('Tienes que subir una imagen de fondo');
            } else {
            let fileExtension = path.extname (file.originalname);
            if (!acceptedExtensions.includes (fileExtension)) {
                throw new Error ("Las extensiones de archivo permitidas son " + acceptedExtensions.join(', '));
        }
    }

        return true;
    })
]