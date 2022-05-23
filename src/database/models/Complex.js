module.exports = (sequelize, dataTypes) => {
    let alias = 'Complex';
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
        tableName: 'complex',
        timestamps: false,
        deletedAt: false
    }
    const Complex = sequelize.define(alias, cols, config);

        // associations 

    Complex.associate = function(models){
        Complex.hasMany(models.User, {
            as: "users",
            foreignKey: "complex_id"
        })

        Complex.hasMany(models.Seat, {
            as: "seat",
            foreignKey: "complex_id"
        })
    }

    return Complex
};