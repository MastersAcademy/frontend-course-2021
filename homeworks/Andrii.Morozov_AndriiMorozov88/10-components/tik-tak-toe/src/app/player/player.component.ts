import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.css']
})
export class PlayerComponent  {
    @Input() player!:number;
    @Input() icon!:string;
    @Input() iconSize!:number;
}
