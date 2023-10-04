import express from 'express'
import {
	createProduct,
	deleteProductById,
	getProductById,
	getProducts,
	insertManyProducts,
	updateProductFieldById,
} from '../controllers/productController'

const router = express.Router()

router.route('/').get(getProducts).post(createProduct)

router.route('/insertmany').post(insertManyProducts)

router
	.route('/:id')
	.get(getProductById)
	.delete(deleteProductById)
	.patch(updateProductFieldById)

export default router
