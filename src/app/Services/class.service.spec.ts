import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';

import { ClassService } from './class.service';

describe('ClassService', () => {
  let service: ClassService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ ClassService ]
    });

    // Inject the http service and test controller for each test
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = new ClassService(httpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be initialized', inject([ClassService], (classService: ClassService) => {
    expect(classService.getClass).toBeTruthy();
  }));

  it('should give me nothing', async() => {
    service.getClass("barbarian").subscribe((event: HttpEvent<any>) => {
      switch (event.type) {
        case HttpEventType.Response:
          expect(event.body).toEqual(null);
      }
    });
    const mockReq = httpTestingController.expectOne("https://www.dnd5eapi.co/api/classes/barbarian/");
    expect(mockReq.request.responseType).toEqual('json');
  });
});