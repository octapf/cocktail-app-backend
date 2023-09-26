import express, { Request, Response } from 'express'
import User from '../models/userModel'

export const userRoutes = express.Router()

userRoutes.get('/', (req: Request, res: Response) => {
	res.send('USERS')
})

userRoutes.post('/', (req: Request, res: Response) => {
	const newUser = {
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		email: req.body.email,
	}

	try {
		User.create(newUser).then((r) => {
			res.send(r)
		})
	} catch (error) {
		console.log(error)
	}
})
