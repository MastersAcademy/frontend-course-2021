import { Component, OnInit } from '@angular/core';
import { ITodo } from 'src/app/models';
import { TodoService } from 'src/app/services';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    todos: ITodo[] = [];
    task = '';

    constructor(private todoService: TodoService) {}

    ngOnInit() {
        this.getTodos();
    }

    handleInputChange($event: string) {
        this.task = $event;
    }

    getTodos() {
        this.todoService
            .getTodos()
            .subscribe((res: ITodo[]) => this.todos = res)
    }

    handleAdd() {
        if(this.task) {
            const todo = {
                text: this.task
            };

            this.todoService
                .createTodo(todo)
                .subscribe(() => {
                    this.task = '';

                    this.getTodos();
                });
        }
    }

    handleUpdate(todoObj: { todo: ITodo, status: boolean, text?: string }) {
        const updatedTodo = {
            text: todoObj.text || todoObj.todo.text,
            isDone: todoObj.status
        }

        this.todoService
            .updateTodo(todoObj.todo.id as string, updatedTodo)
            .subscribe(() => {
                this.getTodos();
            })
    }

    handleRemove(todo: ITodo) {
        this.todoService
            .deleteTodo(todo.id as string)
            .subscribe(() => {
                this.getTodos();
            })
    }
}
