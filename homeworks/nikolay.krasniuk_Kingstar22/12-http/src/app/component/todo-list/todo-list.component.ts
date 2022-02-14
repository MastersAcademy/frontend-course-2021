import { Component } from '@angular/core';
import {ITodo} from '../../app.interface';
import {BackendService} from '../../services/backend.service';
import {UserDataService} from '../../services/user-date.service';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

    todos: ITodo[] = [];
    todoText = '';

    constructor(private postService: BackendService, private userDataService: UserDataService) {}

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

    updateTodoItem(text: string, id: string) {
        this.postService.updateTodoItem(text, id)
            .subscribe(() => {
                this.getTodoList()
            });

    }

    logOut() {
        this.userDataService.logOut()
    }
}
