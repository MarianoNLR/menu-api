import express from 'express'
import { deleteUser, getAll, getById } from "../controllers/userController.js"

const userRouter = express.Router()

userRouter.get('/', getAll)
userRouter.get('/:userId', getById)
userRouter.delete('/:userId', deleteUser)

export default userRouter