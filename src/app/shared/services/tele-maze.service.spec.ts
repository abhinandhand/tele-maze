import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { TeleMazeService } from './tele-maze.service';

describe('TeleMazeService', () => {
  let service: TeleMazeService;
  let  httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TeleMazeService]
    });
    service = TestBed.inject(TeleMazeService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch all the shows on getAllShows', () => {
    service.getAllShows().subscribe(data => {
        expect(data[0].id).toEqual(1);
    });
    httpMock.expectOne('https://run.mocky.io/v3/06489a50-b7b0-4f3d-8306-0c338ac4ddeb');
    httpMock.verify();
});

  it('should fetch only one show for detailed show', () => {
    service.showDetail('1').subscribe(data => {
      expect(data.language).toEqual('English');
    });
    httpMock.expectOne('https://run.mocky.io/v3/d268d1fe-7336-4e59-9235-7b57ffb23768');
    httpMock.verify();
  });

  it('should fetch only one show for detailed show', () => {
    service.search('facebook').subscribe(data => {
        expect(data[0].show.id).toEqual(46014);
    });
    const request =  httpMock.expectOne('https://run.mocky.io/v3/82753e6b-3b4f-4e2b-b2eb-0bcab3e12ede');
    httpMock.verify();
});
});
