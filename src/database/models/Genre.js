module.exports = (sequelize, dataTypes) => {
    let alias = 'Genre';
    let cols = {
        id: {
            type: dataTypes.INT(11),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        
        name: {
            type: dataTypes.STRING(30),
            allowNull: false
        }

    };
    let config = {
        tableName: 'genres',
        timestamps: false,
        deletedAt: false
    }
    const Genre = sequelize.define(alias, cols, config);

        // associations 

    Genre.associate = function(models){
        Genre.hasMany(models.Movie, {
            as: "movies",
            foreignKey: "genre_id"
        })
    }

    return Genre
};