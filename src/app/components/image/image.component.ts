import { Component, OnInit, Input } from '@angular/core';

/**
 * Displays an image
 */
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.sass']
})
export class ImageComponent implements OnInit {

  /**
   * URL of the image being displayed
   */
  @Input() url: string;

  constructor() { }

  ngOnInit() { }
}
