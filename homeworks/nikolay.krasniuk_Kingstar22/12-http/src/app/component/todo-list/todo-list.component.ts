import {Component, EventEmitter, Input, Output,} from '@angular/core';
import { ITodo} from '../../app.interface';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
@Input() todo!:ITodo
@Output() clickBtn = new EventEmitter();
@Output() changeTodo = new EventEmitter();

getId(id: string) {
    this.clickBtn.emit(id);
}

onChange(event: MouseEvent, todo: ITodo) {
    event.preventDefault()
    this.changeTodo.emit(todo);
}

getEditItem() {
    alert('under development')
}
}
