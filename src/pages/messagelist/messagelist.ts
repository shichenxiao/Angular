import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MessagePage } from '../message/message';

/**
 * Generated class for the MessagelistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-messagelist',
  templateUrl: 'messagelist.html',
})
export class MessagelistPage {
  items=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      {
        'img':'assets/imgs/2.jpg',
        'name':'饭一吨',
        'content':'Listen, I have had a pretty messed up day...',
        'time':'晚上9:08'
      },
      {
        'img':'assets/imgs/3.jpg',
        'name':'虽虽酱',
        'content':'Listen, I have had a pretty messed up day...',
        'time':'上午7:30'
      
      },
      {
        'img':'assets/imgs/4.jpg',
        'name':'日食记',
        'content':'Listen, I have had a pretty messed up day...',
        'time':'昨天'
      },
      {
        'img':'assets/imgs/5.jpg',
        'name':'夏达',
        'content':'Listen, I have had a pretty messed up day...',
        'time':'4月15日'
      }
    ]
  }

  message(item){
    this.navCtrl.push(MessagePage, { item: item });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagelistPage');
  }

}
