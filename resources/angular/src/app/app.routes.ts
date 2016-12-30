import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivateGuard } from './services/guard.service';

// Components
import { HomeComponent } from './pages/home/home.component';
import { PageNumComponent } from './pages/page-num/page-num.component';
import { ClientComponent } from './pages/client/client.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  // Root
  
  {
    component: HomeComponent,
    path: '',
     canActivate: [CanActivateGuard],
  },
  {
    canActivate: [CanActivateGuard],
    component: PageNumComponent,
    path: 'page/:id'
  },
  {
    canActivate: [CanActivateGuard],
    component: ClientComponent,
    path: 'client'
  },
  {
    component: LoginComponent,
    path: 'login',
  }
  
  /*
  { path: 'login', component: LoginComponent },
  { path: '', component: SiteLayout,
    children: [
      { path: 'home', component: HomeComponent ,canActivate: [CanActivateGuard],},
      { path: 'client', component: ClientComponent ,canActivate: [CanActivateGuard],},
      { path: 'page/:id', component: PageNumComponent ,canActivate: [CanActivateGuard],}
    ]
  }
  */
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
