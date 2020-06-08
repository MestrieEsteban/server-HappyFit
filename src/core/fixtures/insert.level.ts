import Level from '../models/Level'

const levels = [
  {
    name: 'Débutant',
  },
  {
    name: 'Intermédiaure',
  },
  {
    name: 'Avancé',
  },
]

export async function addLevel(): Promise<never | void> {
  for (const l of levels) {
    const level = new Level()

    level.name = l.name

    await level.save()
  }
}
