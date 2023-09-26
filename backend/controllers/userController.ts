import asyncHandler from 'express-async-handler'
import express, { Request, Response } from 'express'

import User from '../models/userModel'

export const getUsers = asyncHandler(async (req, res) => {
	try {
		const users = await User.find({})

		res.status(200).json(users)
	} catch (error) {
		console.error(error)
		res.status(404)
		throw new Error('No users found.')
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
