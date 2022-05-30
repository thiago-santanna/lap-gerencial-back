import { db } from '../database/db.js'

const helloWorldService = async () => {
  try {
    const sqlResult = await db.select().table('lapa02')
    console.log(sqlResult)
    return sqlResult
  } catch (error) {
    console.log(error)
    return error
  }
}

export { helloWorldService }