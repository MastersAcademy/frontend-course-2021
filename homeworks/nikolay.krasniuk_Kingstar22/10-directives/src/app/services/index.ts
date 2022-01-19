import {RecipesAddService} from './recipes-add.service';
import {GetDurationService} from './get-duration.service';

export const appServices = [
    RecipesAddService,
    GetDurationService
];

export * from './recipes-add.service';
export * from './get-duration.service';
