import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { FetchDataService } from './fetch-data.service';

describe('FetchDataService', () => {
  let service: FetchDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(FetchDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be call http get with url and params', () => {
    const spyObj = spyOn(service['http'], 'get').and.callThrough();
    service.fetchColors('moon');
    expect(service).toBeTruthy();
    expect(spyObj).toHaveBeenCalled();
  });

   it('should be call http get with url and params', fakeAsync(() => {
    let resp = service['parseXmlToJson']('<colors><color><to>Tove</to><from>Jani</from><heading>Reminder</heading><body>Don\'t forget me this weekend!</body></color></colors>');
    // tick();
    resp.then((value) => {
      expect(value).toEqual({to: 'Tove', from: 'Jani', heading: 'Reminder', body: 'Don\'t forget me this weekend!'});
    });
  }));
});
