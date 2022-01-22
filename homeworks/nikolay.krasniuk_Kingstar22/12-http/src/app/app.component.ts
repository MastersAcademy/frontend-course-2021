import { Component } from '@angular/core';
import {BackendService} from './services/backend.service';
import {ITodo} from './app.interface';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    todos: ITodo[] = [];
    todoText = '';

    constructor(private postService: BackendService) {}

    getTodoList() {
        this.postService.getTodoList().subscribe((recipes) =>  this.todos = recipes)
    }

    addTodoItem() {
        if (!this.todoText.trim()) {
            return;
        }
        this.postService.addTodoItem({
            text: this.todoText,
            isDone: false,
            id: ''
        }).subscribe(todo => {
            this.todos.push(todo);
            this.todoText = '';
        });
    }
    removeTodoItem(id: string) {
        this.postService.removeTodoItem(id)
            .subscribe(() => {
                this.getTodoList()
            });
    }

    changeTodoItemStatus(todo: ITodo) {
        this.postService.changeTodoItemStatus(todo)
            .subscribe( (todo) => {
                this.todos = this.todos.map(item => item.id !== todo.id ? item : todo)
            });
    }
}
