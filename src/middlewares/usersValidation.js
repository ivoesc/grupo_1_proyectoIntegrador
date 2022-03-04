const { check } = require('express-validator');

const validation = [
    check('name').notEmpty().withMessage('El nombre no puede estar vacío').bail(),
    check('surname').notEmpty().withMessage('El apellido no puede estar vacío'),
    check('email').notEmpty().withMessage('El email no puede estar vacío'),
    check('phone').notEmpty().withMessage('El número no puede estar vacío'),
    check('complex').notEmpty().withMessage('Tienes que elegir un complejo'),
    check('password').notEmpty().withMessage('La contraseña no puede estar vacía').bail(),
    check('confirmPassword').notEmpty().withMessage('La contraseña no puede estar vacía').bail(),
    check('profilePic').notEmpty().withMessage('Debes subir una foto de perfil').bail(),
]

module.exports = validation;