import namor from 'namor'

export type Person = {
  firstName: string
  lastName: string
  image: string
  age: number
  visits: number
  status: string
}

const range = (len: number) => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newPerson = (): Person => {
  const statusChance = Math.random()
  return {
    firstName: namor.generate({ words: 1, numbers: 0 }),
    lastName: namor.generate({ words: 1, numbers: 0 }),
    image: '/image.png',
    age: Math.floor(Math.random() * 30),
    visits: Math.floor(Math.random() * 100),
    status:
      statusChance > 0.66
        ? 'relationship'
        : statusChance > 0.33
        ? 'complicated'
        : 'single',
  }
}

export type PersonData = Person

export default function makeData(...lens: number[]): PersonData[] {
  const makeDataLevel = (depth = 0): PersonData[] => {
    const len = lens[depth]
    return range(len).map(() => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      }
    })
  }

  return makeDataLevel()
}

export const StaticPersonData: Person[] = [
  {
    firstName: 'population',
    lastName: 'wdpw7',
    age: 1,
    visits: 13,
    status: '',
    image: '/image.png',
  },
  {
    firstName: 'feet',
    lastName: 'grq7l',
    age: 18,
    visits: 75,
    status: '',
    image: '/image.png',
  },
  {
    firstName: 'home',
    lastName: '9l8bf',
    age: 23,
    visits: 32,
    status: '',
    image: '/image.png',
  },
  {
    firstName: 'home',
    lastName: '9l8bf',
    age: 23,
    visits: 32,
    status: '',
    image: '/image.png',
  },
  {
    firstName: 'home',
    lastName: '9l8bf',
    age: 23,
    visits: 32,
    status: '',
    image: '/image.png',
  },
  {
    firstName: 'home',
    lastName: '9l8bf',
    age: 23,
    visits: 32,
    status: '',
    image: '/image.png',
  },
  {
    firstName: 'home',
    lastName: '9l8bf',
    age: 23,
    visits: 32,
    status: '',
    image: '/image.png',
  },
  {
    firstName: 'home',
    lastName: '9l8bf',
    age: 23,
    visits: 32,
    status: '',
    image: '/image.png',
  },
  {
    firstName: 'home',
    lastName: '9l8bf',
    age: 23,
    visits: 32,
    status: '',
    image: '/image.png',
  },
  {
    firstName: 'home',
    lastName: '9l8bf',
    age: 23,
    visits: 32,
    status: '',
    image: '/image.png',
  },
  {
    firstName: 'home',
    lastName: '9l8bf',
    age: 23,
    visits: 32,
    status: '',
    image: '/image.png',
  },
  {
    firstName: 'home',
    lastName: '9l8bf',
    age: 23,
    visits: 32,
    status: '',
    image: '/image.png',
  },
]
