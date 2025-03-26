export const Roles = [
  {
    name: 'Tank',
  },
  {
    name: 'Damage',
  },
  {
    name: 'Support',
  },
] as const


export type Role = typeof Roles[number]["name"];