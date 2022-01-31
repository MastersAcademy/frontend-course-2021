import { Component, Input } from '@angular/core';
import { Icons, Player } from '../enums';

@Component({
    selector: 'app-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.css']
})
export class IconComponent {
    sprite = 'assets/sprite.svg#';
    @Input() icon!:string;
    @Input() iconSize!:number;
    @Input() player!:number;
    get iconType() {
        if (this.player === Player.cross) {
            return Icons.cross
        }
        if (this.player === Player.zero) {
            return Icons.zero
        }
        return null
    }
}

