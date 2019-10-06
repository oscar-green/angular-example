import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  backgroundUrl = "";

  constructor() { }

  setBackground(url: string): void {
    this.backgroundUrl = url;
  }
}
