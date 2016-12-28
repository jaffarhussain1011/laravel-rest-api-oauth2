import { Component, OnInit,Renderer } from '@angular/core';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {
  // bodyClass:string = 'skin-blue sidebar-mini'; 
  constructor(private renderer: Renderer) { }

  ngOnInit() {
    this.renderer.setElementClass(document.body, 'skin-blue', true);
    this.renderer.setElementClass(document.body, 'sidebar-mini', true);
  }

}
