import express from 'express'
import {
	createProduct,
	deleteProductById,
	getProductById,
	getProducts,
	updateProductFieldById,
} from '../controllers/productController'

const router = express.Router()

router.route('/').get(getProducts).post(createProduct)

router
	.route('/:id')
	.get(getProductById)
	.delete(deleteProductById)
	.patch(updateProductFieldById)

export default router
