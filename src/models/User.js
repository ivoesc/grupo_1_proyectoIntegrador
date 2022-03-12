const fs = require('fs');
const path = require('path');


const User = {
	fileName: path.resolve('src/data/users.json'),

	getData: function () {
		return JSON.parse(fs.readFileSync(User.fileName, 'utf-8'));
	},

	generateId: function () {
		let allUsers = User.findAll();
		let lastUser = allUsers.pop();
		if (lastUser) {
			return lastUser.id + 1;
		}
		return 1;
	},

	findAll: function () {
		return User.getData();
	},

	findByPk: function (id) {
		let allUsers = User.findAll();
		let userFound = allUsers.find(oneUser => oneUser.id === id);
		return userFound;
	},

	findByField: function (field, text) {
		let allUsers = User.findAll();
		let userFound = allUsers.find(oneUser => oneUser[field] === text);
		return userFound;
	},

	create: function (userData) {
		let allUsers = User.findAll();
		let newUser = {
			id: User.generateId(),
			...userData
		}
		allUsers.push(newUser);
		fs.writeFileSync(User.fileName, JSON.stringify(allUsers, null,  ' '));
		return newUser;
	},

	delete: function (id) {
		let allUsers = User.findAll();
		let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
		fs.writeFileSync(User.fileName, JSON.stringify(finalUsers, null, ' '));
		return true;
	}
}

//console.log(User.fileName)

module.exports = User;