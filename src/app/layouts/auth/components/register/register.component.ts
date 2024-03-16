import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ConfirmedValidator } from './ConfirmedValidator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  spinner:string = this._AuthService.spinner;
  addSpinner:boolean = false;
  registerForm: FormGroup = new FormGroup({});
  constructor(
    private _FormBuilder: FormBuilder,
    private _AuthService: AuthService,
    private _ToastrService:ToastrService,
    private _Router:Router
  ) { }

  ngOnInit(): void {
    this.setRegisterForm();
  }

  setRegisterForm(){
    this.registerForm = this._FormBuilder.group({
      name : new FormControl(null, [Validators.required]),
      // lastName : new FormControl(null, [Validators.required]),
      // mobile : new FormControl(null, [Validators.required]),
      email : new FormControl(null, [Validators.required,Validators.email]),
      password:new FormControl(null , [Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')] ),
      confirm_password:new FormControl(null)
    },{ 
      validator: ConfirmedValidator('password', 'confirm_password')
    } as AbstractControlOptions)
  }

  onSubmit(data:any){
    if (data.valid) {
      this.addSpinner = true;
      this._AuthService.signUp(data.value).subscribe(
        res => {
          this._ToastrService.success(
            res.message,
            'Registration attempt success',
            {
              timeOut: 2000,
            }
          );
        },
        (err) => {
          this.addSpinner = false;
          this._ToastrService.error(
            err.error.message,
            'Registration attempt failed',
            {
              timeOut: 2000,
            }
          );
        },
        () => {
          this._Router.navigate(['/auth/login']);
        }
      );
    } else {
      this.addSpinner = false;
      this._ToastrService.error('Registration attempt failed', 'Authentication Major Error', {
        timeOut: 2000,
      });
    }

  }

}
