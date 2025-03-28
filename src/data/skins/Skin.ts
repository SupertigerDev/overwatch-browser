export interface Tier {
  id: string;
  name: string;
  color: string;
}
export const Tiers = {
  "common": {
    id: "common",
    name: "Common",
    color: 'white',
  },
  "rare": {
    id: "rare",
    name: "Rare",
    color: "#0b9ccf"
  },
  "epic": {
    id: "epic",
    name: "Epic",
    color: "#ed3cef"

  },
  "legendary": {
    id: "legendary",
    name: "Legendary",
    color: "#ff9c00"

  },
  "mythic": {
    id: "mythic",
    name: "Mythic",
    color: "linear-gradient(90deg,#01c19d,#dddddd,#c1269a)"

  }
} satisfies Record<string, Tier>

export type TierName = keyof typeof Tiers



export interface Skin {
  id: string;
  name: string;
  tier: TierName;
  credits?: number;
  owCoins?: number;
}