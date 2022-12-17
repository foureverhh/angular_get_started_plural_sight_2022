import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit, OnChanges {
  cropWidth:number = 75;
  @Input() rating:number = 0;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.cropWidth = this.rating * 75/5;
  }

  ngOnInit(): void {
  }

  onClick() {
    console.log(`The rating ${this.rating} was clicked!`);
    this.notify.emit(`${this.rating}`);
  }
}
