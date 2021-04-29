import { from, Observable } from 'rxjs';

export function createMultivalueObs(): Observable<number> {
  return from(Array.from({length: 5}, (v, k) => k));
}
