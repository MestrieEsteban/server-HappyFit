import dotenv from 'dotenv'
import { createConnection, Connection } from 'typeorm'

import User from './User'
import Post from './Post'
import Programme from './Programme'
import Exercise from './Exercise'
import Daily from './Daily'
import ExerciseName from './ExerciseName'
import Muscle from './Muscle'
import Meal from './Meal'
import Goal from './Goal'
import Level from './Level'
import { addUser } from '@/core/fixtures/insert.users'
import { addLevel } from '@/core/fixtures/insert.level'
import { addMeal } from '@/core/fixtures/insert.meal'
import { addGoal } from '@/core/fixtures/insert.goal'
import { addExercise } from '@/core/fixtures/insert.exercise'
import { addExercieseName } from '@/core/fixtures/insert.exerciseName'
import { addMuscle } from '@/core/fixtures/insert.muscle'

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
      addUser()
    }, 4000)

    setTimeout(async function () {
      addLevel()
    }, 4000)

    setTimeout(async function () {
      addMeal()
    }, 4000)

    setTimeout(async function () {
      addGoal()
    }, 4000)

    setTimeout(async function () {
      addExercieseName()
    }, 4000)

    setTimeout(async function () {
      addMuscle()
    }, 4000)

    setTimeout(async function () {
      addExercise()
    }, 5000)

    return this._connection
  }
}
