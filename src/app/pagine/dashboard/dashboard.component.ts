import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyAlert } from 'src/app/componenti/my-alert/my-alert.component';
import { MyConfirmDialog } from 'src/app/componenti/my-confirm-dialog/my-confirm-dialog.component';
import { MyNavbar } from 'src/app/componenti/my-navbar/my-navbar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterOutlet,
    MyNavbar,
    MyConfirmDialog,
    MyAlert
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
