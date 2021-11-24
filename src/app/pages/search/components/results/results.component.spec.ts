import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { getLoadingState } from 'src/app/store/loader/reducer/loader.selector';

import { ResultsComponent } from './results.component';

describe('ResultsComponent', () => {
  let component: ResultsComponent;
  let fixture: ComponentFixture<ResultsComponent>;
  let mockStore$: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsComponent ],
      providers: [
        provideMockStore()
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsComponent);
    component = fixture.componentInstance;
    mockStore$ = TestBed.inject(MockStore);

    mockStore$.overrideSelector(getLoadingState, false);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
