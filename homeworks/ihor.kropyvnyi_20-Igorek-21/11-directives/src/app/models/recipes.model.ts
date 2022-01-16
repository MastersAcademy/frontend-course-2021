export interface Recipes {
  abv: number,
  attenuation_level: number,
  boil_volume: {
    unit: string,
    value: number
  },
  brewers_tips: string,
  contributed_by: string,
  description: string,
  ebc: number,
  first_brewed: string,
  food_pairing: {
    0: string
  }
  ibu: number,
  id: number,
  image_url: string,
  ingredients: IIngredients[],
  method: {
    fermentation: {
      temp: {
        unit: string,
        value: number
      }
    },
    mash_temp: {
      0: {
        duration: number,
        temp: {
          unit: string,
          value: number
        }
      }
    },
    twist: null
  }
    name: IName,
  ph: number,
  srm: number,
  tagline: string,
  target_fg: number,
  target_og: number,
  volume: {
    unit: string,
    value: number
  }
}

export interface IIngredients {
    hops: IHops[],
    malt: IMalt[]
    yeast: string
}

export interface IHops {
    add: string,
    amount: IAmount[]
    attribute: string,
    name: IName
}

export interface IMalt {
    name: IName,
    amount: IAmount[]
}

interface IAmount {
    unit: string,
    value: number
}

export interface IName {
    name: string
}
