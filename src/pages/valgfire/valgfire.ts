import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BoxtoPage} from "../boxto/boxto";
import {FinishedPage} from "../finished/finished";

/**
 * Generated class for the ValgfirePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-valgfire',
  templateUrl: 'valgfire.html',
})
export class ValgfirePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ValgfirePage');
  }

  goToFinished() {
    this.navCtrl.setRoot(FinishedPage);
  }
}
