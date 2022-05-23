const fs = require('fs');
const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op, Association } = require("sequelize");
const User = db.User;

const usersApiController = {

    list: (req, res) => {

        User.findAll({
            include: ['complex']
        })
            .then(users => {

                users.forEach(user => {
                    user.dataValues.detail = 'http://localhost:3000/api/users/list/' + user.id
                    delete user.dataValues.complex_id
                    delete user.dataValues.password
                });

                return res.json({
                    count: users.length,
                    users
                })
            })
    },

    user: (req, res) => {

        User.findByPk(req.params.id, {include: ['complex']})
            .then(user => {

                delete user.dataValues.complex_id
                delete user.dataValues.password

                return res.json({
                    user
                })

            })
    }

}

module.exports = usersApiController;