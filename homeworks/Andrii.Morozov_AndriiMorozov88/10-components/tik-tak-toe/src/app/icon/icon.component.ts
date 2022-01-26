import { Component, Input } from '@angular/core';
import { PlayerMove } from '../enums';

@Component({
    selector: 'app-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.css']
})
export class IconComponent {
    @Input() player!:number;
    @Input() iconSize!:number;
    sprite = 'assets/sprite.svg#';
    get icon() {
        if (this.player === PlayerMove.cross) {
            return 'cross'
        }
        if (this.player === PlayerMove.zero) {
            return 'circle'
        }
        return
    }
}
