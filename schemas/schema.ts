import fs from 'fs'
import path from 'path'

const schemaPath = path.join(process.cwd(), 'schemas')

const base:string = fs.readFileSync(`${schemaPath}/base.graphql`, 'utf-8')
const users:string = fs.readFileSync(`${schemaPath}/users.graphql`, 'utf-8')

export default [base, users]