interface IAmount {
  value: number
  unit: string
}

interface IHops {
  name: string
}

interface IMalt {
  name: string
  amount: IAmount
}

interface IIngredients {
  hops: IHops[]
  yeast: string
  malt: IMalt[]
}

interface IMethod {
  mash_temp: IMash[]
}

export interface IMash {
  duration: number
}

export interface IDrink {
  id: number
  description: string
  food_pairing: string[]
  image_url: string
  ingredients: IIngredients
  name: string
  method: IMethod
}
