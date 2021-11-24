import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ImageLazyLoadDirective } from './image-lazy-load.directive';

@Component({
  template: `<img src='./jpg'/>`
})
class TestImageLazyLoadComponent {
}

describe('ImageLazyLoadDirective', () => {

  let component: TestImageLazyLoadComponent;
  let fixture: ComponentFixture<TestImageLazyLoadComponent>;
  let imgEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestImageLazyLoadComponent,ImageLazyLoadDirective]
    });
    fixture = TestBed.createComponent(TestImageLazyLoadComponent);
    component = fixture.componentInstance;
    imgEl = fixture.debugElement.query(By.css('img'));
  });
  it('should add loading lazy to img tag', () => {
    fixture.detectChanges()
    const directive = new ImageLazyLoadDirective(imgEl);
    expect(directive).toBeTruthy();
    expect(imgEl.attributes.loading).toBeTruthy();
  });
});
