import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, Routes } from '@angular/router';
import { AdministrationComponent } from 'src/app/pagine/administration/administration.component';
import { ClassificheComponent } from 'src/app/pagine/dashboard/classifiche/classifiche.component';
import { DashboardComponent } from 'src/app/pagine/dashboard/dashboard.component';
import { HomeComponent } from 'src/app/pagine/dashboard/home/home.component';
import { SchedeUtentiComponent } from 'src/app/pagine/dashboard/schede-utenti/schede-utenti.component';
import { LoginComponent } from 'src/app/pagine/login/login.component';
import { PageNotFoundComponent } from 'src/app/pagine/page-not-found/page-not-found.component';
import { PAGE } from 'src/environments/costanti';
import { AuthService } from 'src/servizi/autenticazione/auth.service';



const AdminGuard: CanActivateFn =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return inject(AuthService).isAdmin()
      ? true
      : inject(Router).navigate([PAGE.DEFAULT]);
  };

const PlayerGuard: CanActivateFn =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return inject(AuthService).isLogged()
      ? true
      : inject(Router).navigate([PAGE.DEFAULT]);
  };


export const routes: Routes = [
  {
    path: PAGE.EMPTY,
    redirectTo: PAGE.DEFAULT,
    pathMatch: 'full'
  },
  {
    path: PAGE.LOGIN,
    component: LoginComponent
  },
  {
    path: PAGE.DASHBOARD.PATH,
    component: DashboardComponent,
    canActivate: [PlayerGuard],
    children: [
      {
        path: PAGE.DASHBOARD.RELATIVE.HOME,
        component: HomeComponent
      },
      {
        path: PAGE.DASHBOARD.RELATIVE.CLASSIFICA,
        component: ClassificheComponent
      },
      {
        path: PAGE.DASHBOARD.RELATIVE.SCHEDE_UTENTE,
        component: SchedeUtentiComponent
      },
      {
        path: PAGE.EMPTY,
        redirectTo: PAGE.DASHBOARD.RELATIVE.HOME,
        pathMatch: 'prefix'
      }

    ]
  },
  {
    path: PAGE.ADMINISTRATOR.PATH,
    component: AdministrationComponent,
    canActivate: [AdminGuard],
  },
  {
    path: '**',
    pathMatch: 'full',
    component: PageNotFoundComponent
  }
];
