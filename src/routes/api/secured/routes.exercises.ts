import { Router, Request, Response } from 'express'

import Exercise from '@/core/models/Exercise'
import { error, success } from '@/core/helpers/response'
import { BAD_REQUEST, CREATED } from '@/core/constants/api'
import { isEmpty } from 'lodash'
import User from '@/core/models/User'
import ExerciseName from '@/core/models/ExerciseName'
import Muscle from '@/core/models/Muscle'
import { Console } from 'console'

const api = Router({ mergeParams: true })

api.get('/', async (req: Request, res: Response) => {
  try {
    const exercise = await Exercise.find({ relations: ['idExerciseName', 'idMuscle'] })
    res.status(CREATED.status).json(exercise)
  } catch (err) {
    res.status(BAD_REQUEST.status).json(error(BAD_REQUEST, err))
  }
})

api.get('/muscle/:id_Muscle', async (req: Request, res: Response) => {
  const { id_Muscle } = req.params

  try {
    //const exercise = await Exercise.find({ idMuscle: {id: 2} })
    const exercise = await Exercise.find({
      where: {
        idMuscle: { id: id_Muscle },
      },
      relations: ['idExerciseName', 'idMuscle'],
    })
    res.status(CREATED.status).json(exercise)
  } catch (err) {
    res.status(BAD_REQUEST.status).json(error(BAD_REQUEST, err))
  }
})

api.post('/', async (req: Request, res: Response) => {
  const fields = ['repet', 'series', 'pause', 'idExerciseName', 'idMuscle']

  try {
    const missings = fields.filter((field: string) => !req.body[field])

    if (!isEmpty(missings)) {
      const isPlural = missings.length > 1
      throw new Error(`Field${isPlural ? 's' : ''} [ ${missings.join(', ')} ] ${isPlural ? 'are' : 'is'} missing`)
    }

    const { repet, series, pause, idExerciseName, idMuscle } = req.body

    const exercise = new Exercise()

    exercise.repet = repet
    exercise.series = series
    exercise.pause = pause
    exercise.idExerciseName = await ExerciseName.findOne(idExerciseName)
    exercise.idMuscle = await Muscle.findOne(idMuscle)
    
    await exercise.save()

    res.status(CREATED.status).json(success(exercise))
  } catch (err) {
    res.status(BAD_REQUEST.status).json(error(BAD_REQUEST, err))
  }
})

export default api
