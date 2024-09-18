import express from 'express'
import { getAll, getById, deleteRestaurant, updateRestaurant, createRestaurant } from '../controllers/restaurantController.js'

const restaurantRouter = express.Router()

restaurantRouter.get('/', getAll)
restaurantRouter.get('/:id', getById)
restaurantRouter.post('/', createRestaurant)
restaurantRouter.put('/:id', updateRestaurant)
restaurantRouter.delete('/:id', deleteRestaurant)

export default restaurantRouter