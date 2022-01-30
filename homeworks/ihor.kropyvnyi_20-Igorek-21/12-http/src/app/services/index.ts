import { ToDoService } from './to-do.service';
import { AuthService } from './auth.service';

export const appServices = [
    ToDoService,
    AuthService
]

export * from './to-do.service';
export * from './auth.service';
