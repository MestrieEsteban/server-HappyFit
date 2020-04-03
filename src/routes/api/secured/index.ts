import { Router } from 'express'
import users from './users'
import posts from './posts'

const api = Router()

api.use('/users', users)
api.use('/users/:userId/posts', posts)

export default api
