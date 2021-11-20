import { Component, Input, OnInit } from '@angular/core';
import { TvShow } from 'src/app/shared/models/tvshow';

@Component({
  selector: 'genre-show-list',
  templateUrl: './genre-show-list.component.html',
  styleUrls: ['./genre-show-list.component.scss']
})
export class GenreShowListComponent implements OnInit {

  @Input() shows: TvShow[];
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
