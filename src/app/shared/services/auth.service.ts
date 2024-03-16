import { Injectable } from '@angular/core';
import { Observable , BehaviorSubject} from 'rxjs';
import {Router} from '@angular/router';
import { LocalService } from './local.service';
import { ServiceConfigService } from 'src/app/core/Service_configurations/service-config.service';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  currentUser = new BehaviorSubject(null);
  spinner:string = 'Waiting ... <i class="fas fa-spinner fa-spin"></i>';

  constructor
    (
      private _Router:Router,
      private _LocalService:LocalService,
      private _ServiceConfig:ServiceConfigService
    ) 
    {
      if (this._LocalService.getJsonValue('userInfo') != null) {
          this.currentUser.next(this._LocalService.getJsonValue('userInfo'))
      }
    }

  signUp(signUpData:any): Observable<any> {
    return this._ServiceConfig.postReq('register',signUpData)
  }

  signIn(signInData:any): Observable<any> {
    return this._ServiceConfig.postReq('login',signInData)
  }

  saveUser(token:string, username = null, email = null, userId = null, roles = null, created_at = null, updated_at = null, deleted_at = null) {
      let user:any = {
        "username":username,
        "token":token,
        "roles":roles,
        "email":email,
        "userId":userId,
        "created_at":created_at,
        "updated_at":updated_at,
        "deleted_at":deleted_at,
      }
      this._LocalService.setJsonValue('userInfo', user);
      this.currentUser.next(user);
  }

  logOut(){
    this.currentUser.next(null);
    this._LocalService.removeItem('userInfo');
    this._Router.navigate(['/auth/login']);
  }

}
