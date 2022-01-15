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
    0: string,
    1: string,
    2: string
  }
  ibu: number,
  id: number,
  image_url: string,
  ingredients: {
    hops:{
      0: {
        add: string,
        amount: {
          unit: string,
          value: number
        },
        attribute: string,
        name: string
      },
      1: {
        add: string,
        amount: {
          unit: string,
          value: number
        },
        attribute: string,
        name: string
      },
      2: {
        add: string,
        amount: {
          unit: string,
          value: number
        },
        attribute: string,
        name: string
      },
      3: {
        add: string,
        amount: {
          unit: string,
          value: number
        },
        attribute: string,
        name: string
      },
      4: {
        add: string,
        amount: {
          unit: string,
          value: number
        },
        attribute: string,
        name: string
      }
    },
    malt: {
      0: {
        amount:{
          unit: string,
          value: number
        } ,
        name: string
      },
      1: {
        amount:{
          unit: string,
          value: number
        } ,
        name: string
      },
      2: {
        amount:{
          unit: string,
          value: number
        } ,
        name: string
      }
    },
    yeast: string
  }
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
  name: string,
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
