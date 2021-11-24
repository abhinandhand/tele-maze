import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { determineAppSetting } from './store/settings/actions/settings.actions';
import { SharedTestingModule } from 'src/test/shared.testing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  let component: AppComponent;
	let fixture: ComponentFixture<AppComponent>;
  let mockStore$: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
      ],
      providers: [
        provideMockStore()
      ],
      declarations: [
        AppComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  	beforeEach(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      mockStore$ = TestBed.inject(MockStore);
      spyOn(mockStore$, 'dispatch').and.callThrough();
	  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  describe('#ngOnInit', () => {
    it('should dispatch determineAppSetting action', ()=> {
          component.ngOnInit();

          expect(mockStore$.dispatch).toHaveBeenCalledWith(determineAppSetting())
    })
  });

});
