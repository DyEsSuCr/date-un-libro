import cors from 'cors'
import express from 'express'
import { Server } from 'http'
import morgan from 'morgan'

import config from '@/config/config'
import { handleErrorMiddleware } from '@/middlewares/error.handler'
import { routes } from '@/routes/routes'

export class App {
  private readonly app: express.Application
  private readonly port: string

  constructor () {
    this.app = express()
    this.port = config.PORT
    this.middlewares()
    this.routes()
  }

  start (): Server {
    return this.app.listen(this.port, () => {
      console.log(`🆗✅🆗 Server on port ${this.port} 🆗✅🆗`)
    })
  }

  routes (): void {
    this.app.use(routes)
    this.app.use(handleErrorMiddleware)
  }

  middlewares (): void {
    this.app.use(express.json())
    this.app.use(cors({ origin: '*' }))
    this.app.disable('x-powered-by')
    this.app.use(morgan('[:date[iso]] (:status) ":method :url HTTP/:http-version" :response-time ms - [:res[content-length]]'))
  }
}
