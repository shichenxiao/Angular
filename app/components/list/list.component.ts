import { Component, OnInit,Input,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() data=[];
  
  dataArr=[];
  changeone(i){
    this.dataArr.push(this.data[i]);//点击复选框，将正在进行列表中的数据添加到已完成列表
    this.data.splice(i,1);//删除正在进行列表中的第i个元素
  }
  delete(i){
    this.data.splice(i,1);//删除正在进行的数据
  }
  changetwo(i){
    this.data.push(this.dataArr[i]);//点击复选框，将已完成列表中的数据添加到正在进行列表
    this.dataArr.splice(i,1);//删除已完成列表中的第i个元素
  }
  deleteArr(i){
    this.dataArr.splice(i,1);//删除已完成的数据
  }

}
