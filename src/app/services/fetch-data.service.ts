import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import * as xml2js from 'xml2js';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  private readonly url = 'http://www.colourlovers.com/api/colors';
  private readonly responseType = 'text';

  constructor(private http: HttpClient) { }

  public fetchColors(searchTerm: string): Observable<any> {
    return this.http.get(this.url, {
      responseType: this.responseType,
      params: {
        keywords : searchTerm
      }
    }).pipe(
        switchMap(async xml => await this.parseXmlToJson(xml))
      )
  }

  private async parseXmlToJson(xml: any) {
    return await xml2js
    .parseStringPromise(xml, { explicitArray: false })
    .then(response => {
      return response.colors.color
    });
    }
}
