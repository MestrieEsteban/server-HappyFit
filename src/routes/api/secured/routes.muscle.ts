import { Router, Request, Response } from 'express'

import User from '@/core/models/User'
import Muscle from '@/core/models/Muscle'
import { error, success } from '@/core/helpers/response'
import { BAD_REQUEST, CREATED } from '@/core/constants/api'

const api = Router()

api.get('/', async (req: Request, res: Response) => {
  try {

    const muscle = await Muscle.find()

    res.status(CREATED.status).json(muscle)
  } catch (err) {
    res.status(BAD_REQUEST.status).json(error(BAD_REQUEST, err))
  }
})

export default api
