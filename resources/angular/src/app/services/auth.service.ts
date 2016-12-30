import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { NotificationService } from './notification.service';
let auth0Lock = require('auth0-lock').default;
import { environment } from '../../environments/environment';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  public token: string;
  public profile:any;
  constructor(private http: Http,private router: Router) {
    // set token if saved in local storage
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
    this.profile = (currentUser && currentUser.username)?{email: currentUser.username}:{};
  }

  login(username: string, password: string): Observable<boolean> {
    let headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = { headers: headers };
    let body = "grant_type="+ environment.api.grantType
    +"&client_id="+environment.api.clientID
    +"&client_secret="+environment.api.clientSecret
    +"&username="+username
    +"&password="+password
    +"&scope="+environment.api.scope;
    return this.http.post(environment.api.domain + '/user/token', body,options).
      map((response: Response) => {
        // login successful if there's a jwt token in the response
        let token = response.json() && response.json().access_token;
        if (token) {
          // set token property
          this.token = token;

          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
          
          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }
      }).catch((error: any) => Observable.throw(error.json().message || 'Server error')); //...errors if any
  }


  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('currentUser');
    //  this.router.navigate(['login']);
  }
  public isAuthenticated = (): boolean => {
    return localStorage.getItem('currentUser') ? true : false;
    // return tokenNotExpired();
  }
  public showLogin(): void{
      this.router.navigate(['login']);
  }
  public getUserEmail = (): string => {
    return this.profile ? this.profile.email : '';
  }

  public getUserPicture = (): string => {
    return this.profile ? this.profile.picture : '';
  }

  public getUserName = (): string => {
    if (this.profile) {
      if (this.profile.user_metadata) {
        return this.profile.user_metadata.name;
      }

      return this.profile.name || this.profile.email;
    }

    return '';
  }
  /*
  private lock: Auth0LockStatic;
  private auth: any;
  private profile: Auth0UserProfile;

  constructor(private af: AngularFire, private notif: NotificationService) {
    this.lock = new auth0Lock(environment.auth0.clientID, environment.auth0.domain, this.generateLockOption());
    this.auth = new Auth0({ callbackURL: '', clientID: environment.auth0.clientID, domain: environment.auth0.domain });
    this.profile = this.getProfile();

    this.lock.on('authenticated', (authResult: any): void => {
      localStorage.setItem('id_token', authResult.idToken);

      this.lock.getProfile(authResult.idToken, (err: Auth0Error, profile: Auth0UserProfile): void => {
        if (err) {
          this.notif.error(err.message);
        } else {
          localStorage.setItem('profile', JSON.stringify(profile));
          this.profile = profile;

          this.auth.getDelegationToken(this.generateAuthOption(authResult.idToken)
            , (err: Auth0Error, token: Auth0DelegationToken): void => {
              if (err) {
                this.notif.error(err.message);
              } else {
                this.af.auth.login(token.id_token, {
                  method: AuthMethods.CustomToken, provider: AuthProviders.Custom
                }).then((resp: any): void => {
                  // this.notif.Success('You successfully loged in');
                }, (err: Error): void => {
                  this.notif.error(err.message);
                });
              }
            });
        }
      });
    });
  }

  public getUserEmail = (): string => {
    return this.profile ? this.profile.email : '';
  }

  public getUserPicture = (): string => {
    return this.profile ? this.profile.picture : '';
  }

  public getUserName = (): string => {
    if (this.profile) {
      if (this.profile.user_metadata) {
        return this.profile.user_metadata.name;
      }

      return this.profile.name || this.profile.email;
    }

    return '';
  }

  public login = (): void => {
    this.lock.show();
  }

  public logout = (): void => {
    localStorage.removeItem('id_token');
    this.af.auth.logout();
    this.profile = null;
    this.notif.success('You successfully loged out');
  }

  public isAuthenticated = (): boolean => {
    return true;
    // return tokenNotExpired();
  }

  private getProfile = (): Auth0UserProfile => {
    let profile = localStorage.getItem('profile');

    if (profile) {
      return JSON.parse(profile);
    }

    return null;
  }

  private generateLockOption = (): Auth0LockConstructorOptions => {
    return {
      additionalSignUpFields: [
        { name: 'name', placeholder: 'Your name' }
      ]
    };
  }

  private generateAuthOption = (token: string): any => {
    return {
      api: 'firebase',
      id_token: token,
      scope: 'openid name email displayName',
      target: 'uyZPfupm9XEM2jdDwiz9xGmvDnly5ydU'
    };
  }
  */

}
