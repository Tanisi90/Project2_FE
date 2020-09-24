import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';

import { ClassService } from './class.service';

describe('ClassService', () => {
  let service: ClassService;
  let http: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ ClassService ]
    });

    // Inject the http service and test controller for each test
    http = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = new ClassService(http);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be initialized', inject([ClassService], (classService: ClassService) => {
    expect(classService.getClass).toBeTruthy();
  }));

  it('should give me nothing', () => {
    service.getClass("barbarian").subscribe((event: HttpEvent<any>) => {
      if (event.type == HttpEventType.Response) {
          expect(event.body).toEqual(null); // because I'm a pessimist.
      } else {
        console.log("I didn't get a response at all!");
        expect(event == null);
      }
      console.log("Heck, I don't even print.");
    });
    console.log("You shouldn't even be here.");
    fail();
  });

  it("should actually work", () => {
    http.get('https://www.googleapis.com/customsearch/v1').subscribe((resp: any) => {
      console.log("I got something!");
      expect(true).toBe(true);
    });
    fail();
  });
});