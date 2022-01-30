import { GetIngredientsPipe } from './get-ingredients.pipe';

describe('GetIngredientsPipe', () => {
    it('create an instance', () => {
        const pipe = new GetIngredientsPipe();
        expect(pipe).toBeTruthy();
    });
});
