export interface Card {
    name: string;
    image_url: string;
    description: string;
    food_pairing: string[];
    ingredients: Ingredients;
    method: MashTemp;
}

export interface Ingredients {
    hops: Array<NameIngredient>;
    malt: Array<NameIngredient>;
    yeast: string;
}

export interface NameIngredient {
    name: string;
}

export interface MashTemp {
    mash_temp: Array<Duration>
}

export interface Duration {
    duration: number;
}