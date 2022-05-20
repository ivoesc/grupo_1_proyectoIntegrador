const fs = require('fs');
const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op, Association } = require("sequelize");
const Movies = db.Movie;
const Genres = db.Genre;
const Actors = db.Actor;
const ActorMovie = db.ActorMovie;
const Director = db.Director;
const Categories = db.Category
const Complex = db.Complex;

const productsApiController = {

    list: (req, res) => {
        Movies.findAll()
            .then(movies => {
                return res.json(movies)
            })
    }

}

module.exports = productsApiController;