import { Router, Request, Response } from 'express'
import { isEmpty } from 'lodash'

import Post from '@/core/models/Post'
import { error, success } from '@/core/helpers/response'
import { BAD_REQUEST, CREATED } from '@/core/constants/api'
import User from '@/core/models/User'

const api = Router({ mergeParams: true })

api.post('/', async (req: Request, res: Response) => {
  const fields = ['slug', 'title', 'content']

  try {
    const missings = fields.filter((field: string) => !req.body[field])

    if (!isEmpty(missings)) {
      const isPlural = missings.length > 1
      throw new Error(`Field${isPlural ? 's' : ''} [ ${missings.join(', ')} ] ${isPlural ? 'are' : 'is'} missing`)
    }

    const { userId } = req.params
    const user = await User.findOne({ where: { id: userId } })

    if (!user) {
      throw new Error(`User ${userId} doens't exist`)
    }

    const { slug, title, content } = req.body

    const post = new Post()

    post.slug = slug
    post.title = title
    post.content = content
    post.user = user

    await post.save()

    res.status(CREATED.status).json(success(post))
  } catch (err) {
    res.status(BAD_REQUEST.status).json(error(BAD_REQUEST, err))
  }
})

export default api
