const { json } = require('express/lib/response');
const path = require('path');
const usersController = require(path.resolve('src/controllers/usersController'));

function userLoggedMiddleware(req, res, next) {
	res.locals.isLogged = false;
	res.locals.isAdmin = false;

	if (req.session.userLogged) {
		console.log(req.session.userLogged.email);
	}

	let emailInCookie = req.cookies.userEmail;
	let userFromCookie = usersController.encontrarUserPorCampo('email', emailInCookie);

	if (userFromCookie) {
		req.session.userLogged = userFromCookie;
	}

	if (req.session.userLogged) {
		res.locals.isLogged = true;
		res.locals.userLogged = req.session.userLogged;
	}

	let adminUsers = ['manuelyeregui@gmail.com', 'escoliivo@gmail.com'];

	if (req.session.userLogged && adminUsers.includes(req.session.userLogged.email)) {
		res.locals.isAdmin = true;
		res.locals.adminLogged = req.session.userLogged;
	};

	next();
}

module.exports = userLoggedMiddleware;