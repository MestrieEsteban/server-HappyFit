import Meal from '../models/Meal'

const meals = [
  {
    number: '1',
  },
  {
    number: '2',
  },
  {
    number: '3',
  },
  {
    number: '4',
  },
  {
    number: '5',
  },
]

export async function addMeal(): Promise<never | void> {
  for (const m of meals) {
    const meal = new Meal()

    meal.number = m.number

    await meal.save()
  }
}
