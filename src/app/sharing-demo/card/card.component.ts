import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnChanges {
  @Input() value?: number | null;
  @Input() title?: string;
  values: number[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.value === undefined || this.value === null) {
      this.values = [];
      return;
    }
    if (this.value === 0) {
      this.values = [];
    }
    this.values.push(this.value);
  }
}
