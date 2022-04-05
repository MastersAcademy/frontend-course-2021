import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {AppInterface} from '../../app.interface';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  stickerColor = 'green';
  cookSpeed = 'slow';
  cards: AppInterface[] | undefined;
  $data: Observable<AppInterface[]> | undefined;

  constructor(private http: HttpClient) {
      return
  }

  ngOnInit(): void {
      this.$data = this.http.get<AppInterface[]>(
          'https://api.punkapi.com/v2/beers'
      );

      this.$data.subscribe(recList => {
          this.cards = recList;
          console.log(this.cards);
      })
  }

}
