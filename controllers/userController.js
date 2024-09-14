import User from '../models/userModel.js'
import bcrypt, { hash } from 'bcrypt'

export async function getAll (req, res) {
    try {
        const users = await User.findAll()

        return res.status(200).json({ result: users })
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error.' })
    }
}

export async function getById (req, res) {
    const { userId } = req.params

    try {
        const user = await User.findByPk(userId)
        
        if (!user) return res.status(404).json({error: 'User not found.'})
        
        return res.status(200).json({ user })
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error.' })
    }
}

export async function register (req, res) {
    const {username, password, confirmPassword} = req.body

    try {

        if (password !== confirmPassword)
            return res.status(400).json({error: 'Passwords must match.'})

        const hashedPassword = await bcrypt.hash(password, 10)

        const result = await User.create({username, password: hashedPassword})

        return res.status(201).json({ result })
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error.' })
    }
}

export async function deleteUser (req, res) {
    const { userId } = req

    try {
        const result = await User.destroy({
            where: {
                id: userId
            }
        })

        return res.status(200).json({message: 'User has been deleted successfully.', result})
    } catch (error) {
        return res.status(500).json({error: 'Internal error server.'})
    }
}