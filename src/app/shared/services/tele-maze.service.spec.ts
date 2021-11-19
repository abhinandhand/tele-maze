import { TestBed } from '@angular/core/testing';

import { TeleMazeService } from './tele-maze.service';

describe('TeleMazeService', () => {
  let service: TeleMazeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeleMazeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
