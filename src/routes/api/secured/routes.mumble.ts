import { Router, Request, Response } from 'express'

import Exercise from '@/core/models/Exercise'
import { error, success } from '@/core/helpers/response'
import { BAD_REQUEST, CREATED } from '@/core/constants/api'
import { isEmpty } from 'lodash'
import User from '@/core/models/User'
import ExerciseName from '@/core/models/ExerciseName'
import Muscle from '@/core/models/Muscle'
import { LessThanOrEqual } from 'typeorm'

const api = Router({ mergeParams: true })

api.get('/generate', async (req: Request, res: Response) => {
  const fields = ['user_id']

  try {
    const missings = fields.filter((field: string) => !req.body[field])

    if (!isEmpty(missings)) {
      const isPlural = missings.length > 1
      throw new Error(`Field${isPlural ? 's' : ''} [ ${missings.join(', ')} ] ${isPlural ? 'are' : 'is'} missing`)
    }

    const { user_id } = req.body
    let exos

    const user = await User.findOne(user_id, { relations: ['levelId', 'mealId', 'goalId'] })
    if (user) {
      if (user.mealId?.id && user.goalId?.id && user.levelId?.id) {
        if (user.levelId?.id === 1) {
          if (user.goalId?.id === 1) {
            exos = await Exercise.find({
              where: [
                {
                  repet: LessThanOrEqual(10),
                  series: LessThanOrEqual(1),
                  idExerciseName: { id: 4 },
                },
                {
                  repet: LessThanOrEqual(10),
                  series: LessThanOrEqual(1),
                  idExerciseName: { id: 3 },
                },
                {
                  repet: LessThanOrEqual(10),
                  series: LessThanOrEqual(1),
                  idExerciseName: { id: 8 },
                },
              ],
              relations: ['idExerciseName', 'idMuscle'],
            })
          }
          if (user.goalId?.id === 2) {
            exos = await Exercise.find({
              where: [
                {
                  repet: LessThanOrEqual(10),
                  series: LessThanOrEqual(1),
                  idExerciseName: { id: 1 },
                },
                {
                  repet: LessThanOrEqual(10),
                  series: LessThanOrEqual(1),
                  idExerciseName: { id: 6 },
                },
                {
                  repet: LessThanOrEqual(10),
                  series: LessThanOrEqual(1),
                  idExerciseName: { id: 10 },
                },
              ],
              relations: ['idExerciseName', 'idMuscle'],
            })
          }
          if (user.goalId?.id === 2) {
            exos = await Exercise.find({
              where: [
                {
                  repet: LessThanOrEqual(10),
                  series: LessThanOrEqual(1),
                  idExerciseName: { id: 9 },
                },
                {
                  repet: LessThanOrEqual(10),
                  series: LessThanOrEqual(1),
                  idExerciseName: { id: 8 },
                },
                {
                  repet: LessThanOrEqual(10),
                  series: LessThanOrEqual(1),
                  idExerciseName: { id: 1 },
                },
              ],
              relations: ['idExerciseName', 'idMuscle'],
            })
          }
        }
        if (user.levelId?.id === 2) {
          if (user.goalId?.id === 1) {
            exos = await Exercise.find({
              where: [
                {
                  repet: 20,
                  series: 2,
                  idExerciseName: { id: 4 },
                },
                {
                  repet: 20,
                  series: 2,
                  idExerciseName: { id: 3 },
                },
                {
                  repet: 20,
                  series: 2,
                  idExerciseName: { id: 8 },
                },
              ],
              relations: ['idExerciseName', 'idMuscle'],
            })
          }
          if (user.goalId?.id === 2) {
            exos = await Exercise.find({
              where: [
                {
                  repet: 20,
                  series: 2,
                  idExerciseName: { id: 1 },
                },
                {
                  repet: 20,
                  series: 2,
                  idExerciseName: { id: 6 },
                },
                {
                  repet: 20,
                  series: 2,
                  idExerciseName: { id: 10 },
                },
              ],
              relations: ['idExerciseName', 'idMuscle'],
            })
          }
          if (user.goalId?.id === 2) {
            exos = await Exercise.find({
              where: [
                {
                  repet: 20,
                  series: 2,
                  idExerciseName: { id: 9 },
                },
                {
                  repet: 20,
                  series: 2,
                  idExerciseName: { id: 8 },
                },
                {
                  repet: 20,
                  series: 2,
                  idExerciseName: { id: 1 },
                },
              ],
              relations: ['idExerciseName', 'idMuscle'],
            })
          }
        }
        if (user.levelId?.id === 3) {
          if (user.goalId?.id === 1) {
            exos = await Exercise.find({
              where: [
                {
                  repet: 30,
                  series: 2,
                  idExerciseName: { id: 4 },
                },
                {
                  repet: 30,
                  series: 2,
                  idExerciseName: { id: 3 },
                },
                {
                  repet: 30,
                  series: 2,
                  idExerciseName: { id: 8 },
                },
              ],
              relations: ['idExerciseName', 'idMuscle'],
            })
          }
          if (user.goalId?.id === 2) {
            exos = await Exercise.find({
              where: [
                {
                  repet: 30,
                  series: 2,
                  idExerciseName: { id: 1 },
                },
                {
                  repet: 30,
                  series: 2,
                  idExerciseName: { id: 6 },
                },
                {
                  repet: 30,
                  series: 2,
                  idExerciseName: { id: 10 },
                },
              ],
              relations: ['idExerciseName', 'idMuscle'],
            })
          }
          if (user.goalId?.id === 2) {
            exos = await Exercise.find({
              where: [
                {
                  repet: 30,
                  series: 2,
                  idExerciseName: { id: 9 },
                },
                {
                  repet: 30,
                  series: 2,
                  idExerciseName: { id: 8 },
                },
                {
                  repet: 30,
                  series: 2,
                  idExerciseName: { id: 1 },
                },
              ],
              relations: ['idExerciseName', 'idMuscle'],
            })
          }
        }
      }
    }
    // let test = []
    // for(const e of exos){
    //   test.push(e.id)
    // }
    // let code = test.join('-')

    res.status(CREATED.status).json(exos)
  } catch (err) {
    res.status(BAD_REQUEST.status).json(error(BAD_REQUEST, err))
  }
})

export default api

