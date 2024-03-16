import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    private _AuthService:AuthService
  ) { }

  ngOnInit(): void {
  }

  LogOut(){
    this._AuthService.logOut();
  }
}
