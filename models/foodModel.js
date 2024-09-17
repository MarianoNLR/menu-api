import { DataTypes, Sequelize, Model } from "@sequelize/core"
import { MySqlDialect } from "@sequelize/mysql"
import Restaurant from './restaurantModel.js'

const sequelize = new Sequelize({dialect: MySqlDialect})

class Food extends Model {}

Food.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        restaurantId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Restaurant',
                key: 'id'
            }
        }
    }, {
        sequelize,
        modelName: 'Food',
        tableName: 'foods',
        timestamps: false
    }
)

Food.belongsTo(Restaurant, { foreignKey: 'restaurantId' })

sequelize.sync()

export default Food