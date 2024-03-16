import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { IUser } from 'src/app/shared/interfaces/auth';
import { AuthService } from 'src/app/shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthUserGuard implements CanActivate {
  constructor(
    private _AuthService:AuthService,
    private router:Router,
    private _ToastrService:ToastrService
  ){ }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let user:IUser = this._AuthService.currentUser.getValue()!

      if (user != null) {
        if (user.roles == 2) {
          return true;
        } 
        else {
          this.router.navigate(['/admin'])
          return false;
        }
      }
      else{
        this._ToastrService.warning('You must login first', 'Access denied', {
          timeOut: 2000,
        })
        this.router.navigate(['/auth/login'])
        return false;
      }
  }
  
}
