import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-scale',
  templateUrl: './scale.component.html',
  styleUrls: ['./scale.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScaleComponent implements OnInit {
  @Input() progress = 0;
  constructor() { }

  ngOnInit(): void {
  }
}
