import { Component, OnInit,Renderer } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // bodyClass:string = 'skin-blue sidebar-mini'; 
  constructor(private renderer: Renderer) { }

  ngOnInit() {
    this.renderer.setElementClass(document.body, 'login-page', true);
  }

}
