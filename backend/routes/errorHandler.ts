import express, { Request, Response } from 'express'

export const errorHandler = express.Router()

errorHandler.get('*', (req: Request, res: Response) => {
	res.status(404).send('ERROR NOT FOUND')
})
