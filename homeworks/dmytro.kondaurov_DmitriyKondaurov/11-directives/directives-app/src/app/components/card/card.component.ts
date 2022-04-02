import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  stickerColor = 'green';
  cookSpeed = 'slow';

  constructor() {
      return
  }

  ngOnInit(): void {
      console.log('init component')
  }


}
