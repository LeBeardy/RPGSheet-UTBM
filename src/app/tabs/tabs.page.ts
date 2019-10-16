import { Component } from '@angular/core';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  isPlatformMobile: boolean;

  constructor(public platform: Platform) {
    this.isPlatformMobile = platform.is('mobile');
  }

}
