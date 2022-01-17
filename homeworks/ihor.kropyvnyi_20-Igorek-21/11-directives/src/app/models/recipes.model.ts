export interface Recipes {
    abv: number,
    attenuation_level: number,
    boil_volume: IAmount,
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
    ingredients: IIngredients,
    method: {
        fermentation: IMethod,
        mash_temp: {
            [key: number]: IMethod
        },
        twist: string
    }
    name: IName,
    ph: number,
    srm: number,
    tagline: string,
    target_fg: number,
    target_og: number,
    volume: IAmount
}

export interface IIngredients {
    hops: IHops[],
    malt: IMalt[],
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

interface IMethod {
    duration: number,
    temp: IAmount
}
