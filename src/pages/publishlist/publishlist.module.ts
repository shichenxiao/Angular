import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PublishlistPage } from './publishlist';

@NgModule({
  declarations: [
    PublishlistPage,
  ],
  imports: [
    IonicPageModule.forChild(PublishlistPage),
  ],
})
export class PublishlistPageModule {}
