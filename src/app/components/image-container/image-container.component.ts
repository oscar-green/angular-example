import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../services/images.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.sass']
})
export class ImageContainerComponent implements OnInit {

  urls: Observable<string[]>;

  constructor(private imagesService: ImagesService) { }

  ngOnInit() {
    this.urls = this.imagesService.getImages();
  }
}
