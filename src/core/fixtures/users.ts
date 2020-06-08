import User from '../models/User'

const users = [
  {
    firstname: 'Esteban',
    lastname: 'Mestrie',
    email: 'esteban94.em@gmail.com',
    password: 'test',
    gender: '0',
    height: 190,
    weight: 90,
  },

  {
    firstname: 'Test',
    lastname: 'Test',
    email: 'test@test.com',
    password: 'test',
    gender: '0',
    height: 190,
    weight: 90,
  },
]

export async function addUserTest(): Promise<never | void> {
  for (const u of users) {
    const user = new User()

    user.firstname = u.firstname
    user.lastname = u.lastname
    user.email = u.email
    user.password = u.password
    user.gender = u.gender
    user.height = u.height
    user.weight = u.weight

    await user.save()
  }
}
