import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
	{
		firstname: { type: String, required: true },
		lastname: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		products: [
			{
				product: {
					type: mongoose.Schema.Types.ObjectId,
					required: true,
					ref: 'Product',
				},
			},
		],
	},
	{
		timestamps: true,
	}
)

const User = mongoose.model('User', userSchema)

export default User
