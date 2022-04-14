module.exports = (sequelize, dataTypes) => {
    let alias = 'Director';
    let cols = {
        id: {
            type: dataTypes.INT(11),
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
        timestamps: true,
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