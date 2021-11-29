export const getRandomCharacter: () => string = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return characters.charAt(Math.floor(Math.random() * characters.length));
};

export const getRandomArbitrary: (min: number, max: number) => number = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}
