import express from 'express'
import {
	createProduct,
	deleteProductById,
	getProductById,
	getProducts,
} from '../controllers/productController'

const router = express.Router()

router.route('/').get(getProducts).post(createProduct)

router.route('/:id').get(getProductById).delete(deleteProductById)

export default router
