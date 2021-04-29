import { Component, OnInit } from '@angular/core';
import { lastValueFrom, of, from, firstValueFrom } from 'rxjs';

import { createMultivalueObs, mapper } from '../utils';

@Component({
  selector: 'app-promises-demo',
  templateUrl: './promises-demo.component.html',
  styleUrls: ['./promises-demo.component.scss']
})
export class PromisesDemoComponent implements OnInit {
  readonly emptyObs = of();
  readonly multivalueObs = createMultivalueObs().pipe(mapper());

  constructor() { }

  ngOnInit(): void {
  }

  async emptyResponseOld(): Promise<void> {
    try {
      const res = await this.emptyObs.toPromise();
      console.log(res);
    } catch (err) {
      console.error('emptyResponseOld: Error in your promise', err);
    }
  }

  async emptyResponseNew(): Promise<void> {
    try {
      const res = await lastValueFrom(this.emptyObs);
      console.log(res);
    } catch (err) {
      console.error('emptyResponseNew: Error in your promise', err);
    }
  }

  async multivalueOld(): Promise<void> {
    try {
      const res = await this.multivalueObs.toPromise();
      console.log('Multi value promise result:', res);
    } catch (err) {
      console.error('multivalueOld: Error in your promise', err);
    }
  }

  async multivalueFirst(): Promise<void> {
    try {
      const res = await firstValueFrom(this.multivalueObs);
      console.log('Multi value promise result:', res);
    } catch (err) {
      console.error('multivalueOld: Error in your promise', err);
    }
  }

  async multivalueLast(): Promise<void> {
    try {
      const res = await lastValueFrom(this.multivalueObs);
      console.log('Multi value promise result:', res);
    } catch (err) {
      console.error('multivalueOld: Error in your promise', err);
    }
  }

  createPromise(): void {
    const promise = lastValueFrom(this.multivalueObs);
  }
}
