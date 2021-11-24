import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Scroll } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Settings } from 'src/app/shared/models/settings.mode';
import { DeviceType, ScreenWidthType } from 'src/app/shared/shared.enum';
import { selectSettings } from 'src/app/store/settings/reducer/settings.selector';
import { getMockTvShows } from 'src/test/mock/tvshows.mock';

import { GenreShowListComponent } from './genre-show-list.component';

describe('GenreShowListComponent', () => {
  let component: GenreShowListComponent;
  let fixture: ComponentFixture<GenreShowListComponent>;
  let mockStore$: MockStore;
  let setting: Settings  = {
    screenWidthType: ScreenWidthType.Desktop,
    userAgent: DeviceType.Desktop
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenreShowListComponent ],
      providers: [
        provideMockStore()
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreShowListComponent);
    component = fixture.componentInstance;
    mockStore$ = TestBed.inject(MockStore);
  });

  describe('on init', () => {
    beforeEach(()=> {
      component.shows = getMockTvShows();
      mockStore$.overrideSelector(selectSettings, setting);
    })
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the value to overall scroll width on ngOninit', ()=> {

    let de = fixture.debugElement.query(By.css('.test'));
    component.genreListElement = {
      nativeElement: {scrollWidth : 1000} as HTMLElement
    };

    component.ngAfterViewInit();

    expect(component.overallScrollWidth).toBe(1000)

});

  it('should scroll right on click of right arrow only if current scroll position is less than overall scroll width', ()=> {

     fixture.debugElement.query(By.css('.test'));
      component.genreListElement = {
        nativeElement: {scrollLeft : 0} as HTMLElement
      };
      component.currentScrollPosition = 1000;
      component.overallScrollWidth = 2000;
      component.scrollRight();

      expect(component.genreListElement.nativeElement.scrollLeft).toBe(0)

  });

  it('should scroll right on click of right arrow only if current scroll position is less than overall scroll width', ()=> {

    fixture.debugElement.query(By.css('.test'));
     component.genreListElement = {
       nativeElement: {scrollLeft : 0} as HTMLElement
     };
     component.currentScrollPosition = 2200;
     component.overallScrollWidth = 2000;
     component.scrollRight();

     expect(component.genreListElement.nativeElement.scrollLeft).not.toBe(10)

 });

  it('should scroll left on click of left arrow only if current scroll position is less than overall scroll width', ()=> {

    fixture.debugElement.query(By.css('.test'));
    component.genreListElement = {
      nativeElement: {scrollLeft : 0} as HTMLElement
    };
    component.currentScrollPosition = 1000;
    component.listContainerWidth = 2000;
    component.scrollLeft();

    expect(component.genreListElement.nativeElement.scrollLeft).toBe(0)
});

it('should not scroll left on click of left arrow only if current scroll position is less than overall scroll width', ()=> {

  fixture.debugElement.query(By.css('.test'));
  component.genreListElement = {
    nativeElement: {scrollLeft : 0} as HTMLElement
  };
  component.currentScrollPosition = 2100;
  component.listContainerWidth = 2000;
  component.scrollLeft();

  expect(component.genreListElement.nativeElement.scrollLeft).not.toBe(0)
});

it('should return the index value for trackBy', () =>{
  const tvShow = getMockTvShows()[0];
    expect(component.trackByTvShowIndex(0, tvShow)).toBe(1);
});


});
