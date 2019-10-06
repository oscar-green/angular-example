import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ImagesService } from '../../services/images.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.sass']
})
export class ImageContainerComponent implements OnInit {

  @Output() selectedImage = new EventEmitter<string>();

  urls: Observable<string[]>;
  backgroundUrl: string;
  

  constructor(private imagesService: ImagesService) { }

  ngOnInit() {
    this.urls = this.imagesService.getImages();
  }



  

  onSetBackground(url: string): void {
    this.backgroundUrl = url;
  }
}
