import { Router } from 'express'

export const helloRouter = Router()

helloRouter.get('/hello', (req, res) => {
  res.send('Hello World Lap Gerencial Web App!')
})
