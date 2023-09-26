import asyncHandler from 'express-async-handler'
import { Request, Response } from 'express'
import mongoose from 'mongoose'

import User from '../models/userModel'

export const getUsers = asyncHandler(async (req: Request, res: Response) => {
	try {
		const users = await User.find({})

		res.status(200).json(users)
	} catch (error) {
		console.error(error)
		res.status(404)
		throw new Error('No users found.')
	}
})

export const getUserById = asyncHandler(async (req: Request, res: Response) => {
	const { id } = req.params

	try {
		if (id !== null && mongoose.Types.ObjectId.isValid(id)) {
			const _id = new mongoose.Types.ObjectId(id)
			const foundUser = await User.findById({ _id })

			if (foundUser !== null) {
				res.send(foundUser)
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
})

export const createUser = asyncHandler(async (req: Request, res: Response) => {
	const newUser = {
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		email: req.body.email,
	}

	try {
		const userFound = await User.findOne({ email: req.body.email })

		if (userFound !== null) {
			res.status(409).send('User already exists')
		}

		const createdUser = await User.create(newUser)

		res.json(createdUser)
	} catch (error) {
		console.log(error)
	}
})
