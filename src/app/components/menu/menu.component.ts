import { Component, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  constructor(private imagesService: ImagesService) { }

  ngOnInit() { }

  addUrl(url: string) {
    this.imagesService.addUrl(url);
  }
}
