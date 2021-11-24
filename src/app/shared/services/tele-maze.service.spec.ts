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
    httpMock.expectOne({method: 'GET'});
});

  it('should fetch only one show for detailed show', () => {
    service.showDetail('1').subscribe(data => {
      expect(data.language).toEqual('English');
    });
    httpMock.expectOne({method: 'GET'});
  });

  it('should fetch only one show for detailed show', () => {
    service.search('facebook').subscribe(data => {
        expect(data[0].show.id).toEqual(46014);
    });
    httpMock.expectOne({method: 'GET'});
});
});
