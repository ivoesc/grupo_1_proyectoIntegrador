module.exports = (sequelize, dataTypes) => {
    let alias = 'Seat';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
  
        user_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        movie_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        complex_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        day: {
            type: dataTypes.STRING(20),
            allowNull: false
        },

        hour: {
            type: dataTypes.STRING(20),
            allowNull: false
        },

    };

    let config = {
        tableName: 'seats',
        timestamps: false,
        deletedAt: false
    }

    const Seat = sequelize.define(alias, cols, config); 

        // associations 

    Seat.associate = function(models){
        Seat.belongsTo(models.User, {
            as: "user",
            foreignKey: "user_id"
        })

        Seat.belongsTo(models.Movie, {
            as: "movie",    
            foreignKey: "movie_id"
        })
        
        Seat.belongsTo(models.Complex, {
            as: "complex",
            foreignKey: "complex_id"
        })
    }
 
    return Seat
};