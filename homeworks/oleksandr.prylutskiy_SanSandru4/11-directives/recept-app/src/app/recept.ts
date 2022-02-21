export class Recept {
    constructor (
        public name: string,
        public description: string,
        public food_pairing: string[],
        public ingredients: string,
        public image_url: string,
        public duration: number
    )
    {}
}
