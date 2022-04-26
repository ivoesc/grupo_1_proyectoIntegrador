module.exports = (sequelize, dataTypes) => {
    let alias = 'Actor';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
  
        name: {
            type: dataTypes.STRING(40),
            allowNull: false
        },

        surname: {
            type: dataTypes.STRING(40),
            allowNull: false
        },

    };

    let config = {
        tableName: 'actors',
        timestamps: false,
        deletedAt: false
    }

    const Actor = sequelize.define(alias, cols, config); 

        // associations 

    Actor.associate = function(models){
        Actor.belongsToMany(models.Movie, {
            as: "movies",
            through: "actor_movie",
            foreignKey: "actors_id",
            otherKey: "movie_id",
            timestamps: false
        })

    }
 
    return Actor
};