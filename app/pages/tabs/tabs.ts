import {Component} from '@angular/core'

import {BarcodePage} from '../barcode/barcode';
import {HomePage} from '../home/home';
import {CameraPage} from '../camera/camera';
import{InAppBrowserPage} from '../inappbrowser/inappbrowser';
@Component({
  templateUrl: 'build/pages/tabs/tabs.html',
})
export class TabsPage {

  //private tab1Root: any;
  private tab1Root: any;
  private tab2Root: any;
  private tab3Root: any;
  private tab4Root: any;

  constructor( ) {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    //this.tab1Root = Home;
    this.tab1Root = HomePage;
    this.tab2Root = BarcodePage;
    this.tab3Root=CameraPage;
    this.tab4Root=InAppBrowserPage;
  }

}
