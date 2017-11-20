import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SecondRootPage } from '../second-root/second-root'
/**
 * Generated class for the ModalTestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal-test',
  templateUrl: 'modal-test.html',
})
export class ModalTestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalTestPage');
  }
  push(){
    this.navCtrl.push(SecondRootPage)
  }

}
