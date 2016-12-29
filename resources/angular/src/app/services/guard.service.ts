import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { LoginComponent } from './../pages/login/login.component'
@Injectable()
export class CanActivateGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router,private login:LoginComponent) { }

  public canActivate() {
    let isAuth = this.auth.isAuthenticated();

    if (isAuth !== true) {
      this.login.show();
    }

    return isAuth;
  }
}
