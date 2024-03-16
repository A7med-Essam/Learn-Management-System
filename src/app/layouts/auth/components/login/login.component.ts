import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  addSpinner:boolean = false;
  spinner:string = this._AuthService.spinner;
  
  constructor(
    private _FormBuilder: FormBuilder,
    private Router: Router,
    private _AuthService: AuthService,
    private _ToastrService: ToastrService
  ) {
    if (this._AuthService.currentUser.getValue() != null) {
      this.Router.navigate(['/landing']);
    }
  }

  ngOnInit(): void {
    this.setLoginForm();
  }

  setLoginForm() {
    this.loginForm = this._FormBuilder.group({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit(data:any) {
    if (data.valid) {
      this.addSpinner = true;
      this._AuthService.signIn(data.value).subscribe(
        res => {
          console.log(res)
          this._AuthService.saveUser(
            res.data.token,
            res.data.user.name,
            res.data.user.email,
            res.data.user.id,
            res.data.user.role_id,
            res.data.user.created_at,
            res.data.user.updated_at,
            res.data.user.deleted_at,
          );
          this._ToastrService.success(
            res.message,'Login attempt success',
            {
              timeOut: 2000,
            }
          );
        },
        err => {
          this.addSpinner = false;
          this._ToastrService.error(
            err.error.message,
            'Login attempt failed',
            {
              timeOut: 2000,
            }
          );
        },
        () => {
          this.Router.navigate(['/landing/home']);
        }
      );
    } 
    else {
      this._ToastrService.error('Login attempt failed', 'Authentication Major Error', {
        timeOut: 2000,
      });
      this.addSpinner = false;
    }
  }

}
