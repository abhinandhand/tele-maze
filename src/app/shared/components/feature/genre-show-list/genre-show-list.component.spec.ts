import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreShowListComponent } from './genre-show-list.component';

describe('GenreShowListComponent', () => {
  let component: GenreShowListComponent;
  let fixture: ComponentFixture<GenreShowListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenreShowListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreShowListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
