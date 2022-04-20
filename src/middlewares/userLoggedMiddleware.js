const path = require('path');
const usersController = require(path.resolve('src/controllers/usersController'));
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op, Association } = require("sequelize");
const User = db.User;

async function userLoggedMiddleware(req, res, next) {
	res.locals.isLogged = false;
	res.locals.isAdmin = false;

	if (req.session.userLogged) {
		console.log("Usuario logueado: " + req.session.userLogged.email);
	}

	let emailInCookie = req.cookies.userEmail;
	
	if(emailInCookie) {
		let userFromCookie = await User.findOne({
		where: {
			email: emailInCookie
	}, 
		include: ['complex']
	})

	if (userFromCookie) {
		req.session.userLogged = userFromCookie;
	}
}

	if (req.session.userLogged) {
		res.locals.isLogged = true;
		res.locals.userLogged = req.session.userLogged;
	}

	let adminUsers = ['manuelyeregui@gmail.com', 'ivoescoli@gmail.com', 'juanfranxeneize89@gmail.com'];

	if (req.session.userLogged && adminUsers.includes(req.session.userLogged.email)) {
		res.locals.isAdmin = true;
		res.locals.adminLogged = req.session.userLogged;
	};

	next();
}

module.exports = userLoggedMiddleware;