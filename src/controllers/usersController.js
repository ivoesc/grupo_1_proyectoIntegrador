const fs = require('fs');
const path = require('path');

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
				oldData: req.body
			});
		}

        let userToCreate = {
            id: usersController.asignarIdUsuario(),
            name: req.body.name,
			surname: req.body.surname,
			email: req.body.email,
            phone: Number(req.body.phone),
			complex: req.body.complex,
			password: req.body.password,
            profilePic: req.file.filename
        }

        users.push(userToCreate)

        usersController.guardarUsuario(users);

        return res.send(users)
        //return res.redirect('login');
    },

    delete: function (id) {
		let finalUsers = users.filter(oneUser => oneUser.id !== id);

		usersController.guardarUsuario(finalUsers);
		return true;
	},
    
};

module.exports = usersController;