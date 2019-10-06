import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ImagesService } from '../../services/images.service';
import { Observable } from 'rxjs/internal/Observable';

/**
 * Displays all images in ImagesService
 */
@Component({
  selector: 'app-image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.sass']
})
export class ImageContainerComponent implements OnInit {

  @Output() selectedImage = new EventEmitter<string>();

  /**
   * The URLs of the images in this container. Automatically creates new images when they are added in the service.
   */
  urls: Observable<string[]>;

  constructor(private imagesService: ImagesService) { }

  ngOnInit() {
    this.urls = this.imagesService.getUrls();
  }
}
