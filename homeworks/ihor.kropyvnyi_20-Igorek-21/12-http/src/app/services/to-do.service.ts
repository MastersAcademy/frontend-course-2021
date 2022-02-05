import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {IToDoList} from '../models/toDoList.model';

@Injectable({
    providedIn: 'root'
})
export class ToDoService {

    constructor( private http: HttpClient ) { }

    public getList(): Observable<IToDoList[]> {
        return this.http.get<IToDoList[]>(environment.apiUrl)
            .pipe( map( (res:IToDoList[]) => res ));
    }

    public addNewTask(text: string): Observable<string>{
        return this.http.post<string>(environment.apiUrl,{
            'text': {
                'task': text
            }
        });
    }

    public deleteTask(id:string): Observable<IToDoList[]> {
        return this.http.delete<IToDoList[]>(environment.apiUrl + id);
    }

    public changeStatusTask(id:string, status: boolean): Observable<object> {
        return this.http.patch(environment.apiUrl + id, {
            'isDone': status
        });
    }
}
