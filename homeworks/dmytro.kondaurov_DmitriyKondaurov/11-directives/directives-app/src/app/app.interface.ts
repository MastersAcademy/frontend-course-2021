export interface Irecipes {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  volume: object;
  boil_volume: object;
  method: Imethod;
  ingredients: Iingredients;
  food_pairing: [];
  brewers_tips: string;
  contributed_by: string;
}

export interface Iingredients {
  malt: [{
    name: string;
    amount: object;
  }];
  hops: [{
    name: string;
    amount: object;
    add: string;
    attribute: string;
  }];
  yeast: string;
}

export interface Imethod {
  fermentation: object;
  mash_temp: object[];
  twist: string | null;
}

