import asyncHandler from 'express-async-handler'
import Product from '../models/productModel'

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

	try {
		const productFound = await Product.findOne({ name: req.body.name })

		if (productFound !== null) {
			res.status(409).send('Product already exists')
		} else {
			res.send(await Product.create(newProduct))
		}
	} catch (error) {
		console.log(error)
	}
})
