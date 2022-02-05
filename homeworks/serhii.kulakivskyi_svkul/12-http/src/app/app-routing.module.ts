import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
    HomeComponent,
    LoginComponent,
    NotFoundComponent
} from './pages';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
