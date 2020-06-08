import Goal from '../models/Goal'

const goals = [
  {
    name: 'Prise de masse',
  },
  {
    name: 'Maintien',
  },
  {
    name: 'Perte de poids',
  },
]

export async function addGoal(): Promise<never | void> {
  for (const g of goals) {
    const goal = new Goal()

    goal.name = g.name

    await goal.save()
  }
}
