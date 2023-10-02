import express from 'express'
import {
	createUser,
	deleteUserById,
	getUserById,
	getUsers,
} from '../controllers/userController'

const router = express.Router()

router.route('/').get(getUsers).post(createUser)

router.route('/:id').get(getUserById).delete(deleteUserById)

export default router
