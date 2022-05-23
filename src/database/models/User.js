module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
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
        },

        surname: {
            type: dataTypes.STRING(30),
            allowNull: false
        },

        email: {
            type: dataTypes.STRING(50),
            allowNull: false,
            unique: true
        },

        phone: {
            type: dataTypes.STRING(20),
            allowNull: false
        },

        complex_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        
        password: {
            type: dataTypes.STRING(100),
            allowNull: false
        },

        profile_pic: {
            type: dataTypes.STRING(30),
            allowNull: false
        },

    };

    let config = {
        tableName: 'users',
        timestamps: false,
        deletedAt: false
    }

    const User = sequelize.define(alias, cols, config);

         // associations 

    User.associate = function(models){
        User.belongsTo(models.Complex, {
            as: "complex",
            foreignKey: "complex_id"
        });

        User.hasMany(models.Seat, {
            as: "seat",
            foreignKey: "user_id"
        })

    }

    return User

}