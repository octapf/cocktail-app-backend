import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes'
import productRoutes from './routes/productRoutes copy'
import { errorHandler } from './routes/errorHandler'
import { connect } from './connectDB'

dotenv.config()

const app: Express = express()
const port = process.env.PORT || 3001
connect()

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
