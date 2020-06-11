import { Router, Request, Response } from 'express'
import { isEmpty } from 'lodash'
import { error, success } from '../../core/helpers/response'
import { BAD_REQUEST, CREATED, OK } from '../../core/constants/api'
import jwt from 'jsonwebtoken'

import User from '../../core/models/User'
import passport from 'passport'
import Level from '@/core/models/Level'
import Goal from '@/core/models/Goal'
import Meal from '@/core/models/Meal'



const api = Router()

api.post('/signup', async (req: Request, res: Response) => {
  const fields = ['firstname', 'lastname', 'email', 'password', 'passwordConfirmation', 'gender', 'height', 'weight']

  try {
    const missings = fields.filter((field: string) => !req.body[field])

    if (!isEmpty(missings)) {
      const isPlural = missings.length > 1
      throw new Error(`Field${isPlural ? 's' : ''} [ ${missings.join(', ')} ] ${isPlural ? 'are' : 'is'} missing`)
    }

    const { firstname, lastname, email, password, passwordConfirmation, gender, height, weight, level, goal, meal } = req.body

    if (password !== passwordConfirmation) {
      throw new Error("Password doesn't match")
    }

    const user = new User()

    let lv = await Level.findOne(level)
    let gl = await Goal.findOne(goal)
    let ml = await Meal.findOne(meal)

    user.firstname = firstname
    user.lastname = lastname
    user.email = email
    user.password = password
    user.gender = gender
    user.height = height
    user.weight = weight
    user.level_id = lv
    user.goal_id = gl
    user.meal_id = ml

    await user.save()

    const payload = { id: user.id, firstname }
    const token = jwt.sign(payload, process.env.JWT_ENCRYPTION as string)

    res.status(CREATED.status).json(success(user, { token }))
  } catch (err) {
    res.status(BAD_REQUEST.status).json(error(BAD_REQUEST, err))
  }
})

api.post('/signin', async (req: Request, res: Response) => {
  const authenticate = passport.authenticate('local', { session: false }, (errorMessage, user) => {
    if (errorMessage) {
      res.status(BAD_REQUEST.status).json(error(BAD_REQUEST, new Error(errorMessage)))
      return
    }

    const payload = { id: user.id, firstname: user.firstname }
    const token = jwt.sign(payload, process.env.JWT_ENCRYPTION as string)

    res.status(OK.status).json(success(user, { token }))
  })

  authenticate(req, res)
})

export default api
