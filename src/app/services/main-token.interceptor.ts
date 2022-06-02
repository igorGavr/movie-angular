import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MainTokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let clone = request.clone({
      headers: new HttpHeaders({
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTUwYWVlOTU0OWE0NmMzY2U1ZGJiM2Q0M2YwZjJlOSIsInN1YiI6IjYyODc4Nzc5ZWM0NTUyNzRjMjg2MDhlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vl7vLLjrvr-3ddQjjIQLhdtW9yYQdWk5N0M0Qbbt-9M'
      })
    })
    return next.handle(clone)
  }
}
