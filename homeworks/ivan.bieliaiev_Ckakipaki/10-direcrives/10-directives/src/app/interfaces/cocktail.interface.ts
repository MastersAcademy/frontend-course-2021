export interface ICocktailInterface {
    name: string,
    description: string,
    image_url: string,
    method: {
        mash_temp: [{duration : number | null}]
    },
    ingredients: object,
    food_pairing: string[]
}
