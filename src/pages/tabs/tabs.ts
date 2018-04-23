import { Component } from '@angular/core';

import { PublishPage } from '../publish/publish';
import { MessagelistPage } from '../messagelist/messagelist';
import { HomePage } from '../home/home';
import { MinePage } from '../mine/mine';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PublishPage;
  tab3Root = MessagelistPage;
  tab4Root = MinePage;

  constructor() {

  }
}
