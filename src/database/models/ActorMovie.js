module.exports = (sequelize, dataTypes) => {
    let alias = 'ActorMovie';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
  
        actor_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            references: {model: 'Actor', key: 'id'}
        },

        movie_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            references: {model: 'Movie', key: 'id'}
        },

    };

    let config = {
        tableName: 'actor_movie',
        timestamps: false,
        deletedAt: false
    }

    const ActorMovie = sequelize.define(alias, cols, config); 

    return ActorMovie
};