import {Component, Input } from '@angular/core';
import {Irecipes} from '../../app.interface';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})

export class CardComponent {
  stickerColor = 'green';
  cookSpeed = 'slow';
  @Input() cards: Irecipes[] | undefined = [];



}
