import mongoose from 'mongoose'

export async function connect() {
	const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.7usqj.mongodb.net/cocktailApp`
	try {
		await mongoose.connect(uri)
		console.log('connected to MongoDB')
	} catch (e) {
		console.log(e)
	}
}
