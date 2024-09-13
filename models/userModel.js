import { Sequelize, DataTypes, Model } from '@sequelize/core'
import { MySqlDialect } from '@sequelize/mysql'

const sequelize = new Sequelize({dialect: MySqlDialect})

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'User',
        tableName: 'users',
        timestamps: true
    }
)

export default User
