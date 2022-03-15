const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');
const session = require('express-session');

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
//const User = require(path.resolve('src/models/User'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const { validationResult } = require('express-validator');
const req = require('express/lib/request');
 
const usersController = {
    login: (req, res) => {
        res.render('login');
    },

    register: (req, res) => {
        res.render('register');
    },

    profile: (req, res) => {
        res.render('profile', {
            user: req.session.userLogged
        });
    },

    encontrarUserPorID: function (id) {
		let userToFind = users.find(oneUser => oneUser.id === id);
		return userToFind;
	},

    encontrarUserPorCampo: function (field, text) {
		let userFound = users.find(oneUser => oneUser[field] === text);
		return userFound;
	},

    asignarIdUsuario(userToCreate) {
		return users[users.length - 1].id +1;
	},

    guardarUsuario(object) {
		fs.writeFileSync(usersFilePath, JSON.stringify(object, null, 2))
	},

    registerProcess: (req, res) => {
		const resultValidation = validationResult(req);

		if (resultValidation.errors.length > 0) {
			return res.render('register', {
				errors: resultValidation.mapped(),
				oldData: req.body, 
                user: req.session.userLogged
			});
		}

    let usuarioYaExistente = usersController.encontrarUserPorCampo('email', req.body.email);

    if (usuarioYaExistente) {
        return res.render('register', {
            errors: {
                email: {
                    msg: 'Ya existe un usuario con este email'
                }
            },
            oldData: req.body
        })
    }

        let userToCreate = {
            id: usersController.asignarIdUsuario(),
            name: req.body.name,
			surname: req.body.surname,
			email: req.body.email,
            phone: Number(req.body.phone),
			complex: req.body.complex,
			password: bcryptjs.hashSync(req.body.password, 10),
            profilePic: req.file.filename
        }

        users.push(userToCreate)

        usersController.guardarUsuario(users);

        return res.send(users)
        //return res.redirect('login');
    },

    loginProcess: (req, res) => {
        let userToLogin = usersController.encontrarUserPorCampo('email', req.body.email);
        
        if (userToLogin) {
            let passwordConfirmation = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if(passwordConfirmation) {
                delete userToLogin.password;
                req.session.userLogged = userToLogin; 
                return res.redirect('/users/profile');
            }
            return res.render('login', {
                errors: {
                    email: {
                        msg: 'Los datos son incorrectos'
                    }
                },
                oldData: req.body
            })
        }
            return res.render('login', {
            errors: {
                email: {
                    msg: 'Este email no está registrado'
                }
            },
            oldData: req.body
        })
    },

    delete: function (id) {
		let finalUsers = users.filter(oneUser => oneUser.id !== id);

		usersController.guardarUsuario(finalUsers);
		return true;
	},

    logout: (req, res) => {
        req.session.destroy();
        res.redirect('/')
    }
    
};

module.exports = usersController;