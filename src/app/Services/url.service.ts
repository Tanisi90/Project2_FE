import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor() { }

  parseUrl(index: string) {
    return index.toLowerCase().replace(/\s/g, "-");
  }
}
