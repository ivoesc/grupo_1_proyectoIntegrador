const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');
const session = require('express-session');

const db = require('../database/models');
const sequelize = db.sequelize;
const { Op, Association } = require("sequelize");

const User = db.User;
const Complex = db.Complex;


/*const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");*/

const { validationResult } = require('express-validator');
const req = require('express/lib/request');

const usersController = {
    login: (req, res) => {
        res.render('login');
    },

    register: (req, res) => {
        const promComplex = Complex.findAll();

        Promise
        .all([promComplex])
        .then(([allComplex]) => {
            return res.render('register', {allComplex})
		})
        .catch(error => res.send(error))

    },

    profile: (req, res) => {
        res.render('profile', {
            user: req.session.userLogged
        });
    },

    registerProcess: async (req, res) => {
        const resultValidation = validationResult(req);

		if (resultValidation.errors.length > 0) {
            const promComplex = Complex.findAll();

            Promise
            .all([promComplex])
            .then(([allComplex]) => {

			return res.render('register', {
                allComplex,
				errors: resultValidation.mapped(),
				oldData: req.body,
            })});
		}

        let existingUser = await User.findOne({
            where: {
                email: req.body.email

        }});
        
        console.log(existingUser);

        if (existingUser != null) {
            const promComplex = Complex.findAll();

            Promise
            .all([promComplex])
            .then(([allComplex]) => {
                return res.render('register', {
                    allComplex,
                    errors: {
                        email: {
                            msg: 'Ya existe un usuario con este email'
                        }
                    },
                    oldData: req.body
                })
            })
            .catch(error => res.send(error))
        } else {
            await User.create({
                name: req.body.name,
                surname: req.body.surname,
                email: req.body.email,
                phone: Number(req.body.phone),
                complex_id: req.body.complex,
                password: bcryptjs.hashSync(req.body.password, 10),
                profile_pic: req.file.filename
        })
        return res.render('login');
    }
    
    },
    
    loginProcess: async (req, res) => {
        let userToLogin = await User.findAll({
            where: {
                email: req.body.email
            },
            include: ['complex']
        })
        
        if (userToLogin) {
            let passwordConfirmation = bcryptjs.compareSync(req.body.password, userToLogin.password);

            if(passwordConfirmation) {
                //delete userToLogin.password;
                req.session.userLogged = {
                    name: userToLogin.name,
                    surname: userToLogin.surname,
                    email: userToLogin.email,
                    phone: userToLogin.phone,
                    complex_id: userToLogin.complex,
                    profile_pic: userToLogin.profilePic
                };
                
                if(req.body.remember) {
					res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 * 24 })
				}

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

    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        res.redirect('/');
    }
}
/* const usersController = {
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

    emailDelUsuario: (req, res) => {
        let userToLogin = usersController.encontrarUserPorCampo('email', req.body.email);

        return userToLogin.email;
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

        return res.redirect('/users/login')
        //return res.redirect('login');
    },

    loginProcess: (req, res) => {
        let userToLogin = usersController.encontrarUserPorCampo('email', req.body.email);
        
        if (userToLogin) {
            let passwordConfirmation = bcryptjs.compareSync(req.body.password, userToLogin.password);

            if(passwordConfirmation) {
                //delete userToLogin.password;
                req.session.userLogged = {
                    name: userToLogin.name,
                    surname: userToLogin.surname,
                    email: userToLogin.email,
                    phone: userToLogin.phone,
                    complex: userToLogin.complex,
                    profilePic: userToLogin.profilePic
                };
                
                if(req.body.remember) {
					res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 * 24 })
				}


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
        res.clearCookie('userEmail');
        req.session.destroy();
        res.redirect('/');
    }
    
};*/

module.exports = usersController;