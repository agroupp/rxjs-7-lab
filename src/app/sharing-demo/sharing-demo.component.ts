import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { timer, Observable, Subject, ReplaySubject, of } from 'rxjs';
import { delay, share, take, takeUntil, tap, switchMap } from 'rxjs/operators';
import { mapper } from '../utils';

@Component({
  selector: 'app-sharing-demo',
  templateUrl: './sharing-demo.component.html',
  styleUrls: ['./sharing-demo.component.scss']
})
export class SharingDemoComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();
  readonly isSharingCtrl = new FormControl(true);

  ticker$ = this.createSharedTicker();
  delayedTicker$ = this.createDelayedTicker();
  mappingsCount = 0;
  constructor() { }

  ngOnInit(): void {
    this.isSharingCtrl.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(value => {
      this.ticker$ = value ? this.createSharedTicker() : this.createRegularTicker();
      this.delayedTicker$ = this.createDelayedTicker();
    });
    // this.createDelayedTicker().subscribe(x => console.log('Delayed subscription. x =', x));
  }

  createRegularTicker(): Observable<number> {
    this.mappingsCount = 0;
    return timer(0, 500).pipe(
      // mapper(),
      tap(() => this.mappingsCount++),
      take(5)
    );
  }

  createSharedTicker(): Observable<number> {
    return this.createRegularTicker().pipe(
      share({
        // connector: () => new ReplaySubject(),
        connector: () => new Subject(),
      })
    );
  }

  createDelayedTicker(): Observable<number> {
    return of(1).pipe(delay(1500), switchMap(() => this.ticker$));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
