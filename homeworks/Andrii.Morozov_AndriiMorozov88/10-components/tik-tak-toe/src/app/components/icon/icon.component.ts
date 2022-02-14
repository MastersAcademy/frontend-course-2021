import { Component, Input } from '@angular/core';
import { Icons } from '../../enums/icon_enum';
import { Player } from '../../enums/player_enum';

@Component({
    selector: 'app-icon',
    templateUrl: './icon.component.html',
})
export class IconComponent {
    sprite = 'assets/sprite.svg#';
    @Input() icon!:string;
    @Input() size!:number;
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

