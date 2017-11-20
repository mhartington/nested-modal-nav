import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ModalRootPage } from '../modal-root/modal-root'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public mdl: ModalController) {

  }
  showModal(){
    this.mdl.create(ModalRootPage).present();
  }

}
