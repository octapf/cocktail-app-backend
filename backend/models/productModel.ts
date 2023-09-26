import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
		name: { type: String, required: true, unique: true },
		type: { type: String, required: true },
		ingredients: [
			{
				name: { type: String, required: true },
				quantity: { type: String, required: true },
			},
		],

		method: { type: String, required: true },
		glass: { type: String, required: true },
		ice: { type: String, required: true },
		garnish: { type: String, required: true },
		optional: [String],
		price: { type: Number, required: true },
		history: { type: String, required: true },
	},
	{
		timestamps: true,
	}
)

const Product = mongoose.model('Product', productSchema)

export default Product
