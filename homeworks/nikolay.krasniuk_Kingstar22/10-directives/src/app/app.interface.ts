export interface IRecipes {
    name: string;
    description: string;
    food_pairing: string;
    ingredients: IIngredients;
    method: IAllDDuration;
    image_url: string;
}

export interface IIngredients {
    hops: Array<INameIngredients>;
    malt: Array<INameIngredients>;
    yeast:string;
}

export interface INameIngredients {
    name: string;
}

export interface IAllDDuration {
    mash_temp: Array<IDuration>;
}

export interface IDuration {
    duration: number;
}
