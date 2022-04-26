module.exports = (sequelize, dataTypes) => {
    let alias = 'Movie';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
    
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },

        description: {
            type: dataTypes.STRING(500),
            allowNull: false
        },

        director_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        
        genre_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        duration: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        
        category_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        price: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        
        trailer: {
            type: dataTypes.STRING(60),
            allowNull: false
        },

        poster: {
            type: dataTypes.STRING(60),
            allowNull: false
        },

        background: {
            type: dataTypes.STRING(60),
            allowNull: false
        },
       
        
    };

    let config = {
        tableName: 'movies',
        timestamps: false,
        deletedAt: false
    }

    const Movie = sequelize.define(alias, cols, config);

        // associations 

    Movie.associate = function(models){
        Movie.belongsTo(models.Genre, {
            as: "genre",
            foreignKey: "genre_id"
        });


        Movie.belongsToMany(models.Actor, {
            as: "actors",
            through: "actor_movie",
            foreignKey: "movie_id",
            otherKey: "actor_id",
            timestamps: false
        })
    

        Movie.belongsTo(models.Director, {
            as: "director",
            foreignKey: "director_id"
        });

        Movie.belongsTo(models.Category, {
            as: "category",
            foreignKey: "category_id"
        });

    }

    return Movie
};