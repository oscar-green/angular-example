import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private urls: string[] = [];

  constructor() { }

  addImage(url: string): void {
    this.urls.push(url);
  }

  getImages(): Observable<string[]> {
    return of(this.urls);
  }
}
