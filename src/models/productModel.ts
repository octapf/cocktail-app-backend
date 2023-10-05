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
				_id: { type: String },
			},
		],

		method: { type: String },
		glass: { type: String },
		ice: { type: String },
		garnish: { type: String },
		optional: [String],
		price: { type: Number },
		history: { type: String },
	},
	{
		timestamps: true,
	}
)

const Product = mongoose.model('Product', productSchema)

export default Product
