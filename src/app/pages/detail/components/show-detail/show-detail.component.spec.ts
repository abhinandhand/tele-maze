import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { getLoadingState } from 'src/app/store/loader/reducer/loader.selector';

import { ShowDetailComponent } from './show-detail.component';

describe('ShowDetailComponent', () => {
  let component: ShowDetailComponent;
  let fixture: ComponentFixture<ShowDetailComponent>;
  let mockStore$: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDetailComponent ],
      providers: [
        provideMockStore()
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDetailComponent);
    component = fixture.componentInstance;
    mockStore$ = TestBed.inject(MockStore);
  });

  it('should create', () => {
    mockStore$.overrideSelector(getLoadingState, false);
    expect(component).toBeTruthy();
  });
});
