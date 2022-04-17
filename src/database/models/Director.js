module.exports = (sequelize, dataTypes) => {
    let alias = 'Director';
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
        tableName: 'directors',
        timestamps: false,
        deletedAt: false
    }

    const Director = sequelize.define(alias, cols, config); 

        // associations 

        Director.associate = function(models){
            Director.hasMany(models.Movie, {
                as: "movies",
                foreignKey: "director_id"
            })
        }
 
    return Director
};