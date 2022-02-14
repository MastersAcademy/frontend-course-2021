import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-square',
    templateUrl: './square.component.html',
    styleUrls: ['./square.component.css']
})
export class SquareComponent  {
    @Input() player!:number;
    @Input() icon!:string;
    iconSize = 65;
}
