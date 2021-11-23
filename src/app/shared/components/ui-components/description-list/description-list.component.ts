import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'desc-li',
  templateUrl: './description-list.component.html',
  styleUrls: ['./description-list.component.scss']
})
export class DescriptionListComponent implements OnInit {

  @Input() dt!: string;
  @Input() dd!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
