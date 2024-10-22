import { Router } from 'express'
import users from './routes.users'
import posts from './posts'
import exercises from './routes.exercises'
import muscle from './routes.muscle'
import programme from './routes.programme'
import mumble from './routes.mumble'

const api = Router()

api.use('/users', users)
api.use('/users/:userId/posts', posts)
api.use('/exercises', exercises)
api.use('/muscle', muscle)
api.use('/programme', programme)
api.use('/mumble', mumble)

export default api
