import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-icon',
    templateUrl: './icon.component.html',
})
export class IconComponent {
    sprite = 'assets/sprite.svg#';
    @Input() icon!:string;
    @Input() size!:number;
}

