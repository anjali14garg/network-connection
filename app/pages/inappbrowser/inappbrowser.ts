import {Component} from '@angular/core';
import {Page, Platform, NavController} from 'ionic-angular';
import {InAppBrowser} from 'ionic-native';
 
@Component({
    templateUrl: 'build/pages/inappbrowser/inappbrowser.html'
})
export class InAppBrowserPage {
      constructor(private platform: Platform) {

  }

   launch(url) {
        this.platform.ready().then(() => {
            InAppBrowser.open(url, "_system", "location=true");
        });
}
}








