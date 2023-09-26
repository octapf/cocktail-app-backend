import express, { Request, Response } from 'express'

export const userRoutes = express.Router()

userRoutes.get('/', (req: Request, res: Response) => {
	res.send('USERS')
})
