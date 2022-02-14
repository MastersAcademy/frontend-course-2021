import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthFormComponent, TodoListComponent} from './component';

const  routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: AuthFormComponent},
    {path: 'todo', component: TodoListComponent},

]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule {

}

