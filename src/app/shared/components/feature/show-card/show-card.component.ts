import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { TvShow } from 'src/app/shared/models/tvshow.model';

@Component({
  selector: 'show-card',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowCardComponent implements OnInit {

  @Input() show!: TvShow;

  constructor() { }

  ngOnInit(): void {
  }

}
