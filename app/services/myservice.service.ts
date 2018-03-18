import { Injectable } from '@angular/core';

@Injectable()
export class MyserviceService {

  constructor() { }

  list = [];
  
//get(url:number){
 // $.ajax({
   // url:url,
   // type:,
   // return url+100;
 // })
//}

 addData(num:number){
   //console.log(10);
  this.list.push(num);
  }
index:number;
getIndex(i){
  this.index = i;
}
//localStorage.setItem('name','[1,2,3]');
//setItem(a,value){
 // localStorage.setItem(a,value);
//}

}
