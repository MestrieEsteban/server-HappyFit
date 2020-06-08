import dotenv from 'dotenv'
import { createConnection, Connection } from 'typeorm'

import User from './User'
import Post from './Post'
import Programme from './Programme'
import Exercise from './Exercise'
import Daily from './Daily'
import ExerciseName from './ExerciseName'
import Muscle from './muscle'
import Meal from './Meal'
import Goal from './Goal'
import Level from './Level'
import { addUserTest } from '@/core/fixtures/users'

export default class Database {
  private static _instance: Database | null = null
  private _connection: Connection | null = null

  private constructor() {}

  public static getInstance(): Database {
    if (!Database._instance) {
      Database._instance = new Database()
    }

    return Database._instance
  }

  public async authenticate(): Promise<Connection | never> {
    dotenv.config()

    const founded = (process.env.DATABASE_URL as string).match(/^(postgres):\/\/(.*):(.*)@(.*):(\d+)\/(.*)$/)
    if (!founded) {
      throw new Error('Please check your DATABASE_URL value')
    }

    const [, , username, password, host, port, database] = founded

    this._connection = await createConnection({
      type: 'postgres',
      host,
      port: parseInt(port),
      username,
      password,
      database,
      entities: [User, Post, Programme, Exercise, Daily, ExerciseName, Muscle, Meal, Goal, Level],
      dropSchema: true,
      synchronize: true,
      logging: false,
    })

    setTimeout(async function () {
      addUserTest()
    }, 4000)

    return this._connection
  }
}
