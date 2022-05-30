import { Router } from 'express'
import hello from '../controller/hello.js'

const routes = Router();

routes.get('/hello', hello.helloworld)

export default routes;