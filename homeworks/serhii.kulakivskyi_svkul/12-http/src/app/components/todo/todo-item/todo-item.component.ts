import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ITodo } from 'src/app/models';

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnChanges {
    edit = false;
    previosVal = '';

    @Input() todo!: ITodo;
    @Output() handleUpdate = new EventEmitter();
    @Output() handleRemove = new EventEmitter();

    ngOnChanges(changes: SimpleChanges) {
        this.previosVal = changes['todo'].currentValue.text
    }

    handleUpdateClick(todoObj: { todo: ITodo, status?: boolean, text?: string }) {
        this.handleUpdate.emit(todoObj);
        this.edit = false;
    }

    handleRemoveClick(todo: ITodo) {
        this.handleRemove.emit(todo);
    }

    handleEditClick() {
        this.edit = !this.edit;
    }

    handleEditDecline() {
        this.todo.text = this.previosVal;
        this.edit = false;
    }
}
