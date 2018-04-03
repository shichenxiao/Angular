import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Http,Jsonp,Headers } from "@angular/http";  
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController,public http:Http,public jsonp:Jsonp,public alertCtrl: AlertController) {}
  headers = new Headers( {'Content-Type':'application/x-www-form-urlencoded'} );

  arr=[];
  username;
  password;
 

  ngOnInit() {
    this.jsonp.get( 'http://datainfo.duapp.com/shopdata/userinfo.php?callback=JSONP_CALLBACK').subscribe( data=>{ 
      this.arr=data['_body'];
      console.log(data);
  });
 }

  data;

  btn() {
    this.http.post('http://datainfo.duapp.com/shopdata/userinfo.php?status=login&userID='+this.username+'&password='+this.password,JSON.stringify({}), {headers:this.headers}).subscribe(data=>{
      console.log(data['_body']);
      this.data=data['_body'];
        if(this.data == 0){
          let alert = this.alertCtrl.create({
            title: 'New Friend!',
            subTitle: '用户名不存在!',
            buttons: ['OK']
          });
          alert.present();
        }else if(this.data == 2){
          let alert = this.alertCtrl.create({
            title: '',
            subTitle: '用户名与密码不符!',
            buttons: ['OK']
          });
          alert.present();
        }else{
          this.navCtrl.push(HomePage);
          console.log('登陆成功');
        }
    } );
  }
}