import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(
    public viewCtrl: ViewController,
    public navCtrl: NavController) {

  }

  dismiss(){
    this.navCtrl.parent._views[0].dismiss()
  }

}
