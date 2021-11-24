import { ImgFallbackDirective } from './image-fall-back.directive';
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: `<img src='./jpg' appImgFallback/>`
})
class TestImageFallBackComponent {
}

describe('ImageLazyLoadDirective', () => {

  let component: TestImageFallBackComponent;
  let fixture: ComponentFixture<TestImageFallBackComponent>;
  let imgEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestImageFallBackComponent,ImgFallbackDirective]
    });
    fixture = TestBed.createComponent(TestImageFallBackComponent);
    component = fixture.componentInstance;
    imgEl = fixture.debugElement.query(By.css('img'));
  });

  it('should fall back when imag is not url is not valid', () => {
    fixture.detectChanges();
    const directive = new ImgFallbackDirective(imgEl);

    expect(directive).toBeTruthy();
  });
});
