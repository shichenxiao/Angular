import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PublishlistPage } from'../publishlist/publishlist';

/**
 * Generated class for the PublishPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-publish',
  templateUrl: 'publish.html',
})
export class PublishPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  list=['资产包转让','债权转让','固产转让','典当担保','融资借贷','悬赏信息','商业保理','尽职调查','资产求购','委外催收','法律服务'];

  
  push(){
    this.navCtrl.push(PublishlistPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PublishPage');
  }

}
