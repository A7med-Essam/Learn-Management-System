import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup,FormControl,Validators ,FormBuilder, AbstractControlOptions} from '@angular/forms';
import { ConfirmedValidator } from 'src/app/layouts/auth/components/register/ConfirmedValidator';
import { IUserProfile } from 'src/app/shared/interfaces/user-profile';
// import { IProfile } from '../Interfaces/iprofile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit , AfterViewInit  {
  @ViewChild('updatePassword') updatePassword!: ElementRef;
  ProfileForm: FormGroup = new FormGroup({});
  ProfileImage!: FormGroup;
  selectedFile!:File;

  constructor(
    private _FormBuilder: FormBuilder,
  ) { }

  ngOnInit(): void { 
    this.setProfileForm();
    this.addProfileImageForm();
  }

  ngAfterViewInit() {
    this.TogglePassword()
  }

  TogglePassword(){
    let element = this.updatePassword.nativeElement
    element.style.display == 'none' ? element.style.display = 'block' : element.style.display = 'none';
  }

  setProfileForm(){
    this.ProfileForm = this._FormBuilder.group({
      firstName : new FormControl(null, Validators.required),
      lastName : new FormControl(null, Validators.required),
      email : new FormControl(null, [Validators.required,Validators.email]),
      phone : new FormControl(null, [Validators.required,Validators.minLength(11),Validators.maxLength(11)]),
      address:new FormControl(null),
      bio:new FormControl(null),
      facebookUrl:new FormControl(null),
      youtubeUrl:new FormControl(null),
      twitterUrl:new FormControl(null),
      linkedInUrl:new FormControl(null),
      country:new FormControl(null, Validators.required),
      state:new FormControl(null, Validators.required),
      city:new FormControl(null, Validators.required),
      password:new FormControl(null , [Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')] ),
      confirm_password:new FormControl(null)
    },{ 
      validator: ConfirmedValidator('password', 'confirm_password')
    } as AbstractControlOptions)
  }

  onSubmit(values:IUserProfile){
    console.log(values)
  }

  readURL(input:any,imageUpload:any){
    if (input.files && input.files[0]) {
      this.selectedFile = input.files.item(0);
      var reader = new FileReader();
      reader.onload = function (e) {
          imageUpload.style.backgroundImage = `url('${e.target?.result}')`;
        }
      reader.readAsDataURL(this.selectedFile);
    }
  }

  addProfileImageForm(){
    this.ProfileImage = new FormGroup({
      "file": new FormControl(null, [Validators.required])
    });
  }

  UpdateProfileImage(data:any){
    if (data.valid) {
      let formData: FormData;
      formData = new FormData();
      formData.append('file', this.selectedFile);
      console.log(this.selectedFile)
    }
  }

}
