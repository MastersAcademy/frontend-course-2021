import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Icons } from 'src/app/enums/icon_enum';
import { Player } from 'src/app/enums/player_enum';

@Component({
    selector: 'app-player-icon',
    templateUrl: './player-icon.component.html'
})
export class PlayerIconComponent {
    @Input() player!: Player;
    @Input() size!: number;
    sprite = 'assets/sprite.svg#';

    get icon() {
        if (this.player === Player.cross) {
            return Icons.cross
        }
        if (this.player === Player.zero) {
            return Icons.zero
        }
        return null
    }
}
