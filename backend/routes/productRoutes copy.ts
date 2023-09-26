import express from 'express'
import {
	createProduct,
	getProductById,
	getProducts,
} from '../controllers/productController'

const router = express.Router()

router.route('/').get(getProducts).post(createProduct)

router.route('/:id').get(getProductById)

export default router
