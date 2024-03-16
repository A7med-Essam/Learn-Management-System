import { Component,OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLogin:boolean = false;

  constructor(
    private _AuthService: AuthService,
  ) {}

  ngOnInit(): void {
    this.getCurrentUser();
  }

  logOut(){
    this._AuthService.logOut()
  }

  getCurrentUser(){
    this._AuthService.currentUser.subscribe( data =>{
      if (data == null) {
        this.isLogin = false;
      }
      else{
        this.isLogin = true;
      }
    })
  }

}
