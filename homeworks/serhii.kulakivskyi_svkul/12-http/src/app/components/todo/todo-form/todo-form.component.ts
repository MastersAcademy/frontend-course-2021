import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-todo-form',
    templateUrl: './todo-form.component.html',
    styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
    @Input() task!: string;
    @Output() handleAdd = new EventEmitter();
    @Output() handleInputChange = new EventEmitter();

    handleAddTodo() {
        this.handleAdd.emit()
    }

    handleChange(value: string) {
        this.handleInputChange.emit(value);
    }
}
