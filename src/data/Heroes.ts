import { RoleName } from "./Roles";
import { Skin } from "./skins/Skin";

export interface Hero {
    id: string;
    name: string;
    role: RoleName
    skins?: () => Promise<Skin[]>
}
export const Heroes: Hero[] = [
    {
        id: "dva",
        name: 'D.Va',
        role: 'TANK',
        skins: async () => (await import("./skins/dva")).skins
    },
    {
        id: "doomfist",
        name: 'Doomfist',
        role: 'TANK',
    },
    {
        id: "hazard",
        name: 'Hazard',
        role: 'TANK',
    },
    {
        id: "junker-queen",
        name: 'Junker Queen',
        role: 'TANK',
    },
    {
        id: "mauga",
        name: 'Mauga',
        role: 'TANK',
    },
    {
        id: "orisa",
        name: 'Orisa',
        role: 'TANK',
    },
    {
        id: "ramattra",
        name: 'Ramattra',
        role: 'TANK',
    },
    {
        id: "reinhardt",
        name: 'Reinhardt',
        role: 'TANK',
    },
    {
        id: "roadhog",
        name: 'Roadhog',
        role: 'TANK',
    },
    {
        id: "sigma",
        name: 'Sigma',
        role: 'TANK',
    },
    {
        id: "winston",
        name: 'Winston',
        role: 'TANK',
    },
    {
        id: "wrecking-ball",
        name: 'Wrecking Ball',
        role: 'TANK',
    },
    {
        id: "zarya",
        name: 'Zarya',
        role: 'TANK',
    },
]


export const getHeroesByRole = (role: RoleName) => Heroes.filter(hero => hero.role === role);
