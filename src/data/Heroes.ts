import { Role } from "./Roles";

export interface Hero {
    name: string;
    role: Role
}
export const Heroes: Hero[] = [
    {
        name: 'D.Va',
        role: 'Tank',
    },
    {
        name: 'Doomfist',
        role: 'Tank',
    },
    {
        name: 'Hazard',
        role: 'Tank',
    },
    {
        name: 'Junker Queen',
        role: 'Tank',
    },
    {
        name: 'Mauga',
        role: 'Tank',
    },
    {
        name: 'Orisa',
        role: 'Tank',
    },
    {
        name: 'Ramattra',
        role: 'Tank',
    },
    {
        name: 'Reinhardt',
        role: 'Tank',
    },
    {
        name: 'Roadhog',
        role: 'Tank',
    },
    {
        name: 'Sigma',
        role: 'Tank',
    },
    {
        name: 'Winston',
        role: 'Tank',
    },
    {
        name: 'Wrecking Ball',
        role: 'Tank',
    },
    {
        name: 'Zarya',
        role: 'Tank',
    },
]


export const getHeroesByRole = (role: Role) => Heroes.filter(hero => hero.role === role);
