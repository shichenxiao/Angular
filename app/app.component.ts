import { Component,EventEmitter,Input,Output} from '@angular/core';
import { MyserviceService } from './services/myservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  input_data = [];
  getData(event){
    this.input_data.push(event);
  }
}
