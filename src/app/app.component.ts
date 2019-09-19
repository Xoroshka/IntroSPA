import { Component } from '@angular/core';
import { router_entrys } from './router-entrys';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  router_entrys = router_entrys;

  title = 'IntroSPA';
}
