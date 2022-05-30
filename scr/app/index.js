import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import { helloRouter } from '../controller/hello.js'

dotenv.config({ path: '../.env.homolog' })

const app = express()
app.use(express.json())
app.use(cors())
app.use(helloRouter)

export { app }
