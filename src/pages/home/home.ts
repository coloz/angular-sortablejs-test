import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SortablejsOptions } from 'angular-sortablejs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  options: SortablejsOptions = {
    delay: 400,
    // touchStartThreshold: 5,
    animation: 150,

    onStart: (event: any) => {

    },
    onEnd: (event: any) => {

    },
  };

  items = [1, 2, 3, 4, 5];
  constructor(public navCtrl: NavController) {

  }

  logout(){
    console.log('logout');
    // this.app.getRootNav().setRoot(LoginPage);
    this.navCtrl.pop();
  }

}
