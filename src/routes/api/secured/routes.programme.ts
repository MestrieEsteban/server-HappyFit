import { Router, Request, Response } from 'express'

import Exercise from '@/core/models/Exercise'
import { error, success } from '@/core/helpers/response'
import { BAD_REQUEST, CREATED } from '@/core/constants/api'
import { isEmpty } from 'lodash'
import User from '@/core/models/User'
import ExerciseName from '@/core/models/ExerciseName'
import Muscle from '@/core/models/Muscle'
import Programme from '@/core/models/Programme'

const api = Router({ mergeParams: true })

api.get('/', async (req: Request, res: Response) => {
  try {
    const programme = await Programme.find({ relations: ['exercise', 'exercise.idExerciseName', 'exercise.idMuscle'] })
    console.log(programme)
    res.status(CREATED.status).json(programme)
  } catch (err) {
    res.status(BAD_REQUEST.status).json(error(BAD_REQUEST, err))
  }
})

api.get('/:id_user', async (req: Request, res: Response) => {
  try {
    const { id_user } = req.params

    const programme = await Programme.find({
      where: {
        user_id: { id: id_user },
      },
      relations: ['exercise', 'exercise.idExerciseName', 'exercise.idMuscle'],
    })

    res.status(CREATED.status).json(programme)
  } catch (err) {
    res.status(BAD_REQUEST.status).json(error(BAD_REQUEST, err))
  }
})

api.post('/', async (req: Request, res: Response) => {
  const fields = ['name', 'id_exercise', 'user_id']

  try {
    const missings = fields.filter((field: string) => !req.body[field])

    if (!isEmpty(missings)) {
      const isPlural = missings.length > 1
      throw new Error(`Field${isPlural ? 's' : ''} [ ${missings.join(', ')} ] ${isPlural ? 'are' : 'is'} missing`)
    }

    const { name, id_exercise, user_id } = req.body

    const programme = new Programme()

    const user = await User.findOne(user_id, { relations: ['levelId', 'mealId', 'goalId'] })
    const allExo: Array<number> = id_exercise.split('-')

    programme.name = name
    programme.user_id = user
    const test = []

    for (let i = 0; i < allExo.length; i++) {
      const exo = await Exercise.findOne(1, { relations: ['idExerciseName', 'idMuscle'] })
      if (exo) {
        test.push(exo)
      }
    }
    programme.exercise = test

    await programme.save()

    res.status(CREATED.status).json(success(programme))
  } catch (err) {
    res.status(BAD_REQUEST.status).json(error(BAD_REQUEST, err))
  }
})

export default api
