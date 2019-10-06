import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

/**
 * Keeps track of all images
 */
@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private urls: string[] = [];

  constructor() { }

  addUrl(url: string): void {
    this.urls.push(url);
  }

  getUrls(): Observable<string[]> {
    return of(this.urls);
  }
}
