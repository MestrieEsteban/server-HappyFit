import Muscle from '../models/Muscle'

const muscles = [
  {
    name: 'Abdominaux',
  },
  {
    name: 'Adducteurs ',
  },
  {
    name: 'Abducteurs',
  },
  {
    name: 'Dorsaux',
  },
  {
    name: 'Biceps',
  },
  {
    name: 'Triceps',
  },
  {
    name: 'Pectoraux',
  },
  {
    name: 'Epaules',
  },
  {
    name: 'Trapèzes',
  },
  {
    name: 'Fessiers',
  },
  {
    name: 'Extenseurs des bras',
  },
  {
    name: 'Extenseurs des poignets',
  },
  {
    name: 'Fléchisseurs des bras et des poignets',
  },
  {
    name: 'Fixateurs des omoplates',
  },
  {
    name: 'Ischio-jambiers',
  },
  {
    name: 'Lombaires',
  },
  {
    name: 'Mollets',
  },
  {
    name: 'Quadriceps',
  },
]

export async function addMuscle(): Promise<never | void> {
  for (const m of muscles) {
    const muscle = new Muscle()

    muscle.name = m.name

    await muscle.save()
  }
}
