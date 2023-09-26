import asyncHandler from 'express-async-handler'
import Product from '../models/productModel'
import { Request, Response } from 'express'
import mongoose from 'mongoose'

export const getProducts = asyncHandler(async (req: Request, res: Response) => {
	try {
		const products = await Product.find({})

		res.status(200).json(products)
	} catch (error) {
		console.error(error)
		res.status(404)
		throw new Error('No Products found.')
	}
})

export const getProductById = asyncHandler(
	async (req: Request, res: Response) => {
		const { id } = req.params

		try {
			if (id !== null && mongoose.Types.ObjectId.isValid(id)) {
				const _id = new mongoose.Types.ObjectId(id)
				const foundProduct = await Product.findById({ _id })

				if (foundProduct !== null) {
					res.send(foundProduct)
				} else {
					res.status(400).json('Bad request')
				}
			} else {
				res.status(400).json('Bad request')
			}
		} catch (error) {
			console.error(error)
			throw new Error('Error')
		}
	}
)

export const createProduct = asyncHandler(async (req, res) => {
	const {
		user,
		name,
		type,
		ingredients,
		method,
		glass,
		ice,
		garnish,
		optional,
		price,
		history,
	} = req.body

	try {
		if (
			user !== undefined &&
			name !== undefined &&
			type !== undefined &&
			ingredients !== undefined
		) {
			const newProduct = {
				user,
				name,
				type,
				ingredients,
				method,
				glass,
				ice,
				garnish,
				optional,
				price,
				history,
			}

			const productFound = await Product.findOne({ name })

			if (productFound !== undefined) {
				res.status(409).send('Product already exists')
			} else {
				const createdProduct = await Product.create(newProduct)
				res.json(createdProduct)
			}
		} else {
			res.status(400).send('Bad request')
		}
	} catch (error) {
		console.log(error)
	}
})
