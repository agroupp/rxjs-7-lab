import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private readonly http: HttpClient) { }

  posts(): Observable<Post[]> {
    return this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/posts`);
  }

  emptyResponse(): Observable<unknown> {
    return of();
  }

  errorResponse(): Observable<Post[]> {
    return of(1).pipe(switchMap(() => {
      throw new Error('Error in response');
    }));
  }
}
