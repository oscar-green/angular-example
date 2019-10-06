import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.sass']
})
export class ImageComponent implements OnInit {

  @Input() url: string;
  @Output() clickImage = new EventEmitter();

  constructor() { }

  ngOnInit() { }
}
