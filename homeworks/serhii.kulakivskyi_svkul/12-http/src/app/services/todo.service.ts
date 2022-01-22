import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITodo } from '../models';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    constructor(private http: HttpClient) {}

    getTodos(): Observable<ITodo[]> {
        return this.http.get<ITodo[]>(`${environment.apiUrl}/secure/todos`)
    }

    createTodo(todo: ITodo): Observable<ITodo> {
        return this.http.post<ITodo>(`${environment.apiUrl}/secure/todos`, todo)
    }

    updateTodo(id: string, todo: ITodo): Observable<ITodo> {
        return this.http.patch<ITodo>(`${environment.apiUrl}/secure/todos/${id}`, todo)
    }

    deleteTodo(id: string): Observable<void> {
        return this.http.delete<void>(`${environment.apiUrl}/secure/todos/${id}`)
    }
}
