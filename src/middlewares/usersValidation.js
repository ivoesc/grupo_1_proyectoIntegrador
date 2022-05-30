const path = require('path')

const { check } = require('express-validator');

module.exports = [
    check('name').notEmpty().withMessage('El nombre no puede estar vacío').bail().isAlpha().withMessage("Ingresa un nombre válido").bail().isLength({ min: 2}).withMessage('El nombre debe tener al menos dos letras').bail(),
    check('surname').notEmpty().withMessage('El apellido no puede estar vacío').isAlpha().withMessage("Ingresa un apellido válido").bail().isLength({ min: 2}).withMessage('El apellido debe tener al menos dos letras').bail(),
    check('email').notEmpty().withMessage('El email no puede estar vacío').bail().isEmail().withMessage("Debes ingresar un email válido").bail(),
    check('phone').notEmpty().withMessage('El número no puede estar vacío').isNumeric().isLength({min: 6}).withMessage("Ingresa un numero de teléfono válido").bail(),
    check('complex').notEmpty().withMessage('Tienes que elegir un complejo').bail(),
    check('password').notEmpty().withMessage('La contraseña no puede estar vacía').bail().isLength({min: 8}).withMessage('La contraseña debe tener un mínimo de 8 caracteres').bail(),
    check('confirmPassword').notEmpty().withMessage('La contraseña no puede estar vacía').bail().
        
        custom( (value, { req }) => {
        if (req.body.password !== value) {
            throw new Error ('Las contraseñas deben coincidir');
            }
             return true;
        }
           
    ),

    check('profilePic').custom( (value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif', '.jpeg'];
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