import ExerciseName from '../models/ExerciseName'

const ExerciseNames = [
  {
    name: 'Jumping Jack',
  },
  {
    name: 'Chaise contre le mur',
  },
  {
    name: 'Pompes',
  },
  {
    name: 'Abdominaux',
  },
  {
    name: 'Monter sur une chaise',
  },
  {
    name: 'Squats',
  },
  {
    name: 'Dips sur une chaise',
  },
  {
    name: 'Planche',
  },
  {
    name: 'Courir sur place',
  },
  {
    name: 'Fentes',
  },
  {
    name: 'Pompes en T',
  },
  {
    name: 'Planche sur le coté',
  },
]

export async function addExercieseName(): Promise<never | void> {
  for (const e of ExerciseNames) {
    const exerciseName = new ExerciseName()

    exerciseName.name = e.name

    await exerciseName.save()
  }
}
