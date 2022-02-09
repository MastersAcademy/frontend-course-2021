import { TodoService } from './services/todo.service';
import { Todo } from './models/todo';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    title(title: any) {
        throw new Error('Method not implemented.');
    }
  todos: Todo[] = [];
  newTodo = '';

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
      this.getTodos();
  }

  getTodos() {
      this.todoService
          .getTodos()
          .subscribe((res: Todo[]) => this.todos = res)
  }

  addTodo() {
      if(this.newTodo.trim()) {
          const todo = { text: this.newTodo };
          this.todoService
              .createTodo(todo)
              .subscribe(() => {
                  this.newTodo = '';
                  this.getTodos();
              })
      }

  }

  deleteTodo(id: string) {
      this.todoService
          .deleteTodo(id)
          .subscribe(() => {
              this.getTodos();
          })
  }

  updateTodo(todo: Todo) {
      const updated = {
          text: todo.text,
          isDone: todo.isDone
      }
      this.todoService
          .updateTodo(todo.id as string, updated)
          .subscribe(() => {
              this.getTodos();
          })
  }

}
