import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from '../pagine/administration/administration.component';
import { ClassificheComponent } from '../pagine/classifiche/classifiche.component';
import { DashboardComponent } from '../pagine/dashboard/dashboard.component';
import { LoginComponent } from '../pagine/login/login.component';
import { PageNotFoundComponent } from '../pagine/page-not-found/page-not-found.component';
import { SchedeUtentiComponent } from '../pagine/schede-utenti/schede-utenti.component';
import { ShowcaseComponent } from '../pagine/showcase/showcase.component';
import { AuthAdmin } from '../servizi/autenticazione/auth-admin';
import { AuthGuard } from '../servizi/autenticazione/auth-guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    data: { nav: true }
  },
  {
    path: 'administration',
    component: AdministrationComponent,
    canActivate: [AuthAdmin],
    data: { nav: true }
  },
  {
    path: 'showcase',
    component: ShowcaseComponent,
    canActivate: [AuthGuard],
    data: { nav: true }
  },
  {
    path: 'classifiche',
    component: ClassificheComponent,
    canActivate: [AuthGuard],
    data: { nav: true }
  },
  {
    path: 'schede-utenti',
    component: SchedeUtentiComponent,
    canActivate: [AuthGuard],
    data: { nav: true }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { nav: false }
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    data: { nav: false }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
