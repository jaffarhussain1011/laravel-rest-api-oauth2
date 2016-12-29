import { Component, OnInit, Renderer } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './../../models/user';
import { CustomValidators } from 'ng2-validation';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  public submitted: boolean; // keep track on whether form is submitted
  public events: any[] = []; // use later to display form changes
  loading = false;
  error = '';
  model: User;
  constructor(
    private renderer: Renderer, 
    private formBuilder: FormBuilder,
    private authenticationService:AuthService,
    private router: Router) { }

  ngOnInit() {
    this.renderer.setElementClass(document.body, 'login-page', true);
    this.loginForm = this.formBuilder.group({
      email: ['jaffar.techsupportone@nxvt.com', CustomValidators.email],
      password: ['123456', Validators.required]
    });
  }
  login(model: User, isValid: boolean) {
    this.model = model;
    this.submitted = true; // set form submit to true

    // check if model is valid
    // if valid, call API to save customer
    console.log(model, isValid);
    if (isValid) {
      this.loading = true;
      this.authenticationService.login(this.model.email, this.model.password)
        .subscribe(result => {
          console.log(result);
          if (result === true) {
            this.router.navigate(['/']);
          } else {
            this.error = 'Username or password is incorrect';
            this.loading = false;
          }
        },
        error => {
          this.loading = false;
          console.log(error);
        });
    }
  }
  show(): void{
      this.router.navigate(['/']);
  }
}
