const fs = require('fs');
const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op, Association } = require("sequelize");
const Seat = db.Seat
const Complex = db.Complex

const seatsApiController = {

    list: (req, res) => {

        Seat.findAll({
            include: ['complex', 'user', 'movie']
        })
            .then(seats => {

                for (seat of seats) {

                    delete seat.dataValues.user_id
                    delete seat.dataValues.complex_id
                    delete seat.dataValues.movie_id
                    delete seat.user.dataValues.password

                }

                return res.json({
                    seats
                })
            })
    },

    store: async (req, res) => {

        console.log(req.body);

        const createdSeats = []

        for (let seat of req.body.seats) {
            const createdSeat = 
                await Seat.create({
                    user_id: req.session.userLogged.id,
                    movie_id: req.body.movie_id,
                    complex_id: req.body.complex_id,
                    day: req.body.day,
                    hour: req.body.hour,
                    seat_id: seat
                })

                createdSeats.push(createdSeat)
        }

        return res.send(createdSeats)

        

    }

}

module.exports = seatsApiController;