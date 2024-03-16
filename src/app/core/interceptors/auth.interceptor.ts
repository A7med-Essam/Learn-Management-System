import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  token:string= "";
  constructor(private _AuthService:AuthService) {
      _AuthService.currentUser.subscribe( (res:any) =>{
        if (res == null) {
          this.token = '';
        } 
        else {
          this.token = res.token;
        }
      })
    }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const HttpHeader = request.clone({
      headers: request.headers.set("Authorization",`Bearer ${this.token}`)
    })

    return next.handle(HttpHeader);
  }
}
