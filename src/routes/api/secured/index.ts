import { Router } from 'express'
import users from './routes.users'
import posts from './posts'
import exercises from './routes.exercises'
import muscle from './routes.muscle'

const api = Router()

api.use('/users', users)
api.use('/users/:userId/posts', posts)
api.use('/exercises', exercises)
api.use('/muscle', muscle)

export default api
