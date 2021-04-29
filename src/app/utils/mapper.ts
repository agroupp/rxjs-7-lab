import { Observable, OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';

export function mapper(): OperatorFunction<any, any> {
  // tslint:disable-next-line:only-arrow-functions
  return function(source: Observable<any>): Observable<any> {
    return source.pipe(
      map(x => {
        console.log('Mapping x = ', x);
        return x;
      })
    );
  };
}
