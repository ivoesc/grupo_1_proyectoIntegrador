const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const { validationResult } = require('express-validator');
 
const usersController = {
    login: (req, res) => {
        res.render('login');
    },

    register: (req, res) => {
        res.render('register');
    },

    processRegister: (req, res) => {
        const resultValidation = validationResult(req);
        return res.send(resultValidation);
    },
    
};

module.exports = usersController;