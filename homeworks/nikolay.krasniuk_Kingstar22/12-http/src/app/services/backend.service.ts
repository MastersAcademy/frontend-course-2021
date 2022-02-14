import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ITodo} from '../app.interface';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BackendService {

    constructor(private http: HttpClient) { }

    getTodoList(){
        return this.http.get<ITodo[]>('https://ma-http-homework.herokuapp.com/secure/todos')
    }

    addTodoItem(todo: ITodo): Observable<ITodo> {
        return this.http.post<ITodo>('https://ma-http-homework.herokuapp.com/secure/todos', todo);
    }

    removeTodoItem(id: string): Observable<ITodo[]> {
        return this.http.delete<ITodo[]>(`https://ma-http-homework.herokuapp.com/secure/todos/${id}`);
    }

    changeTodoItemStatus(todo:ITodo): Observable<ITodo> {
        return this.http.patch<ITodo>(`https://ma-http-homework.herokuapp.com/secure/todos/${todo.id}`, {
            isDone: !todo.isDone
        });
    }

    updateTodoItem(updateText: string, id: string) {
        return this.http.patch<ITodo>(`https://ma-http-homework.herokuapp.com/secure/todos/${id}`, {
            text: updateText
        });
    }
}
