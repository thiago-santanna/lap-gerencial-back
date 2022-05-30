import { helloWorldService } from '../services/hello/index.js'
export default {
  async helloworld(req, res) {
    const resposta = await helloWorldService()
    return res.json(resposta)
  }
}
