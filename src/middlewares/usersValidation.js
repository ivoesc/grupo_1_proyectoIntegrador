const path = require('path')

const { check } = require('express-validator');

module.exports = [
    check('name').notEmpty().withMessage('El nombre no puede estar vacío').bail().isAlpha().withMessage("Ingresa un nombre válido").bail(),
    check('surname').notEmpty().withMessage('El apellido no puede estar vacío'),
    check('email').notEmpty().withMessage('El email no puede estar vacío').bail().isEmail().withMessage("Debes ingresar un email válido").bail(),
    check('phone').notEmpty().withMessage('El número no puede estar vacío').isNumeric().withMessage("Ingresa un numero de teléfono válido"),
    check('complex').notEmpty().withMessage('Tienes que elegir un complejo'),
    check('password').notEmpty().withMessage('La contraseña no puede estar vacía').bail().isLength({min: 6}).withMessage('La contraseña debe tener un mínimo de 6 caracteres').bail(),
    check('confirmPassword').notEmpty().withMessage('La contraseña no puede estar vacía').bail().
        
        custom( (value, { req }) => {
        let password = req.body.password;
        let confirmPassword = req.body.confirmPassword;
        if (password !== confirmPassword) {
            throw new Error ('Las contraseñas deben coincidir');
            }
             return true;
        }
           
    ),

    check('profilePic').custom( (value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif'];
        if (!file) {
            throw new Error ('Tienes que subir una imagen');
            } else {
            let fileExtension = path.extname (file.originalname);
            if (!acceptedExtensions.includes (fileExtension)) {
                throw new Error ("Las extensiones de archivo permitidas son " + acceptedExtensions.join(', '));
        }
    }

        return true;
    })
]