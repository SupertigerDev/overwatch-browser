export interface Role {
  name: string
}
export const Roles = {
  TANK: {
    name: 'Tank',
  },
  DAMAGE: {
    name: 'Damage',
  },
  SUPPORT: {
    name: 'Support',
  },
 } satisfies Record<string, Role>


export type RoleName = keyof typeof Roles