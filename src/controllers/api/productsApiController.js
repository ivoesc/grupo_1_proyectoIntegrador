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
        Movies.findAll( {
            include: ['director', 'genre', 'category']
        })
            .then(movies => {
                let estrenos = 0
                let proximamente = 0
                let reestrenos = 0
                for (movie of movies) {

                    movie.dataValues.detail = 'http://localhost:3000/api/movies/list/' + movie.id
                    delete movie.dataValues.director_id
                    delete movie.dataValues.genre_id
                    delete movie.dataValues.category_id

                    if (movie.category_id == 1) {
                        estrenos ++ 
                    } else if (movie.category_id == 2) {
                        proximamente ++ 
                    } else {
                        reestrenos ++
                    }
                }

                /*movies.forEach(n => {
                    n.dataValues.detail = 'hola'
                })*/

                return res.json({
                    count: movies.length,
                    countByCategory: { 
                        estrenos, proximamente, reestrenos
                    },
                    movies,
                    
                })
            })
    },

    product: async (req, res) => {
        let director = await Director.findAll()
        let genre = await Genres.findAll()
        let category = await Categories.findAll()
        Movies.findByPk(req.params.id, {include: ['director', 'genre', 'category']})
            .then(movie => {

                delete movie.dataValues.director_id
                delete movie.dataValues.genre_id
                delete movie.dataValues.category_id


                return res.json({
                    movie
                })
            })
    }

}

module.exports = productsApiController;