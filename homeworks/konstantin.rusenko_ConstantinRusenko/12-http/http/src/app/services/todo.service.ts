import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class TodoService {

    constructor(private http: HttpClient) { }

    getTodos(): Observable<Todo[]> {
        return this.http.get<Todo[]>(`${environment.apiUrl}/secure/todos`);
    }

    createTodo(todo: Todo): Observable<Todo> {
        return this.http.post<Todo>(`${environment.apiUrl}/secure/todos`, todo);
    }

    deleteTodo(id: string): Observable<void> {
        return this.http.delete<void>(`${environment.apiUrl}/secure/todos/${id}`);
    }

    updateTodo(id: string, todo: Todo): Observable<Todo> {
        return this.http.patch<Todo>(`${environment.apiUrl}/secure/todos/${id}`, todo);
    }
}
