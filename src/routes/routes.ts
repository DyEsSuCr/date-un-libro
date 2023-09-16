import { Router } from 'express'
import { readdirSync } from 'node:fs'
import { parse, join } from 'node:path'

const pathModules = join(__dirname, '../modules')
const routes = Router()

const cleanFileName = (fileName: string): string => parse(fileName).name

readdirSync(pathModules).forEach((folder): void => {
  const pathRoute: string = join(pathModules, folder)

  readdirSync(pathRoute).forEach((fileName): void => {
    const cleanName = cleanFileName(fileName)

    if (cleanName.endsWith('routes')) {
      void import(`${pathRoute}/${cleanName}`).then((moduleRouter) => {
        routes.use(`/api/v1/${cleanName.split('.').shift() as string}`, moduleRouter.router)
      })
    }
  })
})

export { routes }
