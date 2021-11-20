import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent {

  @Input() searchTerm: string | null = null;
	@Output() readonly searchTermEvent = new EventEmitter();
  searchControl = new FormControl('');

  constructor() { }

  search() {
    this.searchTermEvent.emit(this.searchControl.value);
  }

}
