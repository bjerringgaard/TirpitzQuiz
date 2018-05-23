import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BoxtoPage} from "../boxto/boxto";
import {BoxtrePage} from "../boxtre/boxtre";

/**
 * Generated class for the ValgtoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-valgto',
  templateUrl: 'valgto.html',
})
export class ValgtoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ValgtoPage');
  }

  goToBoxtre() {
    this.navCtrl.setRoot(BoxtrePage);
  }

}
