import { Component } from '@angular/core';
import { NavController,ModalController  } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
//import { MenuController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Platform, ToastController, App, Tabs } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  constructor(public platform: Platform,
    public appCtrl: App,
    public toastCtrl: ToastController,public modalCtrl:ModalController,public navCtrl: NavController,public loadingCtrl:LoadingController) {
      this.platform.ready().then(() => {
        this.registerBackButtonAction(null);
      });
  }
   //控制硬件返回按钮是否触发，默认false
   backButtonPressed: boolean = false;
  //注册方法
  registerBackButtonAction(tabRef: Tabs): void {
    
    //registerBackButtonAction是系统自带的方法
    this.platform.registerBackButtonAction(() => {
      //获取NavController
      let activeNav: NavController = this.appCtrl.getActiveNavs()[0];
      //如果可以返回上一页，则执行pop
      if (activeNav.canGoBack()) {
        activeNav.pop();
      } else {
        if (tabRef == null) {
          //执行退出
          this.showExit();
        } else {
          //选择首页第一个的标签
          tabRef.select(0);
        }
      }
    });
  }
  //退出应用方法
  showExit() {
    //如果为true，退出
    if (this.backButtonPressed) {
      this.platform.exitApp();
    } else {
        //第一次按，弹出Toast
        this.toastCtrl.create({
            message: '再按一次退出应用',
            duration: 2000,
            position: 'middle'
        }).present();
      //标记为true
      this.backButtonPressed = true;
      //两秒后标记为false，如果退出的话，就不会执行了
      setTimeout(() => this.backButtonPressed = false, 2000);
    }
  }

  login() {
    this.navCtrl.push (LoginPage);
  }


  doInfinite(infiniteScroll){
    console.log(infiniteScroll);
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    
    setTimeout(() => {
      loading.dismiss();

    }, 5000);
    loading.present();
     infiniteScroll.complete();  
}

  
}
