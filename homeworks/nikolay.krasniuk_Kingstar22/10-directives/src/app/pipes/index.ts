import {TransformIngredientsPipe} from './transform-ingredients.pipe'
import {GetAllDurationPipe} from './get-all-duration.pipe';

export const appPipes = [
    TransformIngredientsPipe,
    GetAllDurationPipe,

]

export * from './transform-ingredients.pipe';
export * from './get-all-duration.pipe';
