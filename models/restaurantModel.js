import { Sequelize, DataTypes, Model } from '@sequelize/core'
import { MySqlDialect } from '@sequelize/mysql'
import User from './userModel.js'

const sequelize = new Sequelize({dialect: MySqlDialect})

class Restaurant extends Model {}

Restaurant.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        address: {
            type: DataTypes.STRING
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: User,
                key: 'id'
            }
        }
    }, {
        sequelize,
        modelName: 'Restaurant',
        tableName: 'restaurants',
        timestamps: true
    }
)

Restaurant.belongsTo(User, {foreignKey: 'userId'})

sequelize.sync()

export default Restaurant