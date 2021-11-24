import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { determineAppSetting } from './store/settings/actions/settings.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    this.store.dispatch(determineAppSetting())
  }

  constructor(private store: Store){}
}
