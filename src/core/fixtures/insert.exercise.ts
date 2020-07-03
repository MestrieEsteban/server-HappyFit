import Exercise from '../models/Exercise'
import ExerciseName from '../models/ExerciseName'
import Muscle from '../models/Muscle'

const exercises = [
  //Debutant
  {
    repet: 10,
    series: 1,
    pause: 10,
    idExerciseName: 1,
    idMuscle: 18,
  },
  {
    repet: 10,
    series: 1,
    pause: 10,
    idExerciseName: 2,
    idMuscle: 7,
  },
  {
    repet: 10,
    series: 1,
    pause: 10,
    idExerciseName: 3,
    idMuscle: 7,
  },
  {
    repet: 10,
    series: 1,
    pause: 10,
    idExerciseName: 4,
    idMuscle: 1,
  },
  {
    repet: 10,
    series: 1,
    pause: 10,
    idExerciseName: 6,
    idMuscle: 17,
  },
  {
    repet: 10,
    series: 1,
    pause: 10,
    idExerciseName: 7,
    idMuscle: 6,
  },
  {
    repet: 10,
    series: 1,
    pause: 10,
    idExerciseName: 8,
    idMuscle: 1,
  },
  {
    repet: 10,
    series: 1,
    pause: 10,
    idExerciseName: 9,
    idMuscle: 10,
  },
  {
    repet: 10,
    series: 1,
    pause: 10,
    idExerciseName: 10,
    idMuscle: 15,
  },
  {
    repet: 10,
    series: 1,
    pause: 10,
    idExerciseName: 11,
    idMuscle: 8,
  },
  {
    repet: 10,
    series: 1,
    pause: 10,
    idExerciseName: 12,
    idMuscle: 1,
  },
  //intermediaire
  {
    repet: 20,
    series: 2,
    pause: 10,
    idExerciseName: 1,
    idMuscle: 18,
  },
  {
    repet: 20,
    series: 2,
    pause: 10,
    idExerciseName: 2,
    idMuscle: 7,
  },
  {
    repet: 20,
    series: 2,
    pause: 10,
    idExerciseName: 3,
    idMuscle: 7,
  },
  {
    repet: 20,
    series: 2,
    pause: 10,
    idExerciseName: 4,
    idMuscle: 1,
  },
  {
    repet: 20,
    series: 2,
    pause: 10,
    idExerciseName: 6,
    idMuscle: 17,
  },
  {
    repet: 20,
    series: 2,
    pause: 10,
    idExerciseName: 7,
    idMuscle: 6,
  },
  {
    repet: 20,
    series: 2,
    pause: 10,
    idExerciseName: 8,
    idMuscle: 1,
  },
  {
    repet: 20,
    series: 2,
    pause: 10,
    idExerciseName: 9,
    idMuscle: 10,
  },
  {
    repet: 20,
    series: 2,
    pause: 10,
    idExerciseName: 10,
    idMuscle: 15,
  },
  {
    repet: 20,
    series: 2,
    pause: 10,
    idExerciseName: 11,
    idMuscle: 8,
  },
  {
    repet: 20,
    series: 2,
    pause: 10,
    idExerciseName: 12,
    idMuscle: 1,
  },
  //Avancé
  {
    repet: 30,
    series: 2,
    pause: 10,
    idExerciseName: 1,
    idMuscle: 18,
  },
  {
    repet: 30,
    series: 2,
    pause: 10,
    idExerciseName: 2,
    idMuscle: 7,
  },
  {
    repet: 30,
    series: 2,
    pause: 10,
    idExerciseName: 3,
    idMuscle: 7,
  },
  {
    repet: 30,
    series: 2,
    pause: 10,
    idExerciseName: 4,
    idMuscle: 1,
  },
  {
    repet: 30,
    series: 2,
    pause: 10,
    idExerciseName: 6,
    idMuscle: 17,
  },
  {
    repet: 30,
    series: 2,
    pause: 10,
    idExerciseName: 7,
    idMuscle: 6,
  },
  {
    repet: 30,
    series: 2,
    pause: 10,
    idExerciseName: 8,
    idMuscle: 1,
  },
  {
    repet: 30,
    series: 2,
    pause: 10,
    idExerciseName: 9,
    idMuscle: 10,
  },
  {
    repet: 30,
    series: 2,
    pause: 10,
    idExerciseName: 10,
    idMuscle: 15,
  },
  {
    repet: 30,
    series: 2,
    pause: 10,
    idExerciseName: 11,
    idMuscle: 8,
  },
  {
    repet: 30,
    series: 2,
    pause: 10,
    idExerciseName: 12,
    idMuscle: 1,
  },
]

export async function addExercise(): Promise<never | void> {
  for (const e of exercises) {
    const exercise = new Exercise()

    exercise.repet = e.repet
    exercise.series = e.series
    exercise.pause = e.pause
    exercise.idExerciseName = await ExerciseName.findOne(e.idExerciseName)
    exercise.idMuscle = await Muscle.findOne(e.idMuscle)

    await exercise.save()
  }
}
