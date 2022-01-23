import { Todo } from './../../models/todo';
import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnChanges {

    edit = false;
    previousValue = '';
    buttonName = 'Status';

    @Input() todo!: Todo;
    @Output() handleRemove = new EventEmitter();
    @Output() handleDone = new EventEmitter();
    @Output() handleEdit = new EventEmitter();

    ngOnChanges(changes: SimpleChanges): void {
        this.previousValue = changes['todo'].currentValue.text;
    }

    handleRemoveClick(id: string | undefined) {
        this.handleRemove.emit(id);
    }

    handleDoneClick(todo: Todo) {
        todo.isDone = !todo.isDone;
        this.handleDone.emit(todo);
    }

    handleEditClick() {
        this.edit = !this.edit;
    }

    handleCancelClick() {
        this.todo.text = this.previousValue;
        this.edit = false;
    }
}
