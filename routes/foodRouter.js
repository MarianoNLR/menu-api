import express from 'express'
import { getAllByRestaurantId, getFood, deleteFood, updateFood, createFood } from '../controllers/foodController.js'

const foodRouter = express.Router()

foodRouter.get('/:restaurantId', getAllByRestaurantId)
foodRouter.get('/:id', getFood)
foodRouter.post('/:restaurantName', createFood)
foodRouter.updateFood(':/id', updateFood)
foodRouter.delete('/:id', deleteFood)

export default foodRouter