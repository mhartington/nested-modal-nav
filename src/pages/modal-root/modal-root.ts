import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ModalTestPage} from '../modal-test/modal-test'
/**
 * Generated class for the ModalRootPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal-root',
  templateUrl: 'modal-root.html',
})
export class ModalRootPage {
  public rootPage = ModalTestPage
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalRootPage');
  }

}
