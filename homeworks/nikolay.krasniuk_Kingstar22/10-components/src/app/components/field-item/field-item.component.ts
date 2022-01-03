import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-field-item',
    templateUrl: './field-item.component.html',
    styleUrls: ['./field-item.component.css']
})
export class FieldItemComponent  {
    @Input() itemIcon = '';

    constructor() {
        return
    }

}
