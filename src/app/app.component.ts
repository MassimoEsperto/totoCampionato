import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyAlert } from './componenti/my-alert/my-alert.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MyAlert],
  template: ` 
  <div class="page">
    <div class="sub-page">
      <div class="col-12 col-sm-10 col-md-8 col-lg-8">
        <router-outlet></router-outlet>
      </div>
    </div>
  </div>
  <my-alert></my-alert>`
})
export class AppComponent {
  title = 'totoCampionato';
}
