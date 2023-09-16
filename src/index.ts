import { App } from '@/app'
import { mongoDBConnect } from '@/database/mongodb/dbConnect'

(async () => {
  await mongoDBConnect()
  const app = new App()
  app.start()
})()
