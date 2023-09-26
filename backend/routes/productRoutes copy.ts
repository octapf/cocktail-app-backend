import express, { Request, Response } from 'express'

export const productRoutes = express.Router()

productRoutes.get('/', (req: Request, res: Response) => {
	res.send('PRODUCTS')
})

productRoutes.post('/', (req: Request, res: Response) => {
	res.send('PRODUCTS')
})

productRoutes.put('/', (req: Request, res: Response) => {
	res.send('PRODUCTS')
})

productRoutes.delete('/', (req: Request, res: Response) => {
	res.send('PRODUCTS')
})
