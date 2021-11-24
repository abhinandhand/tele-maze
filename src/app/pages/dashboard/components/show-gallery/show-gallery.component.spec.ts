import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { getLoadingState } from 'src/app/store/loader/reducer/loader.selector';
import { dashboardPageOnDestroy } from '../../actions/dashboard.actions';
import { ShowGalleryComponent } from './show-gallery.component';


describe('ShowGalleryComponent', () => {
  let component: ShowGalleryComponent;
  let fixture: ComponentFixture<ShowGalleryComponent>;
  let mockStore$: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowGalleryComponent ],
      providers: [
        provideMockStore()
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowGalleryComponent);
    component = fixture.componentInstance;
    mockStore$ = TestBed.inject(MockStore);
    spyOn(mockStore$, 'dispatch').and.callThrough();
  });

  it('should create', () => {
    mockStore$.overrideSelector(getLoadingState, false);
    expect(component).toBeTruthy();
  });

  it('should dispatch clear state action on component destroy', () => {
    component.ngOnDestroy()
    expect(mockStore$.dispatch).toHaveBeenCalledWith(dashboardPageOnDestroy())
  });
});
