import 'dotenv/config'
import { app } from './scr/app/index.js'

const PORT = process.env.PORT || 3000

// Servidor http express
app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Servidor em PORT: ${PORT}`)
})