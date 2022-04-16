module.exports = (sequelize, dataTypes) => {
    let alias = 'Category';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
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
        tableName: 'categories',
        timestamps: false,
        deletedAt: false
    }

    const Category = sequelize.define(alias, cols, config);

        // associations 

    Category.associate = function(models){
        Category.hasMany(models.Movie, {
            as: "movies",
            foreignKey: "category_id"
        })
    }

    return Category
};