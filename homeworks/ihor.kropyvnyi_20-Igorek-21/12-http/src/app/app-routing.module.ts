import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent, ToDoListComponent} from './components';
import {AppComponent} from './app.component';

const routes: Routes = [
    // {
    //     path:'', component: AppComponent, children: [
    {
        path: '', redirectTo: 'login', pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginPageComponent
    },
    {
        path: 'to_do_list',
        component: ToDoListComponent
    }
    //     ]
    // }


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
