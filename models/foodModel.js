import { DataTypes, Sequelize, Model } from "@sequelize/core"
import { MySqlDialect } from "@sequelize/mysql"

const sequelize = new Sequelize({dialect: MySqlDialect})

class Food extends Model {}

Food.init(
    {
        id: {
            type: DataTypes.STRING,
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
        menuId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Menu',
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