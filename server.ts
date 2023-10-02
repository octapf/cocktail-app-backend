import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import userRoutes from './src/routes/userRoutes'
import productRoutes from './src/routes/productRoutes'
import { errorHandler } from './src/routes/errorHandler'
import cors from 'cors'
import { connect } from './src/connectDB'

dotenv.config()

const app: Express = express()
const port = process.env.PORT || 3001
connect()

app.use(
	cors({
		origin: 'http://localhost:5173',
		methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
		credentials: true,
	})
)
app.use(express.json())
app.use(
	express.urlencoded({
		extended: true,
	})
)

app.use('/products', productRoutes)
app.use('/users', userRoutes)

app.get('/', (req: Request, res: Response) => {
	res.send('Express + TypeScript Server')
})
app.use('*', errorHandler)

app.listen(port, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
