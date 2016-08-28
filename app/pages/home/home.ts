import {Component} from '@angular/core';
import {NavController, AlertController, Platform} from 'ionic-angular';	
import {Network} from "ionic-native";
 
declare var navigator: any;
declare var Connection: any;
 
@Component({
    templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
 
    constructor(private navCtrl: NavController, private platform: Platform,private alertCtrl: AlertController) { }
 
    checkNetwork() {
        this.platform.ready().then(() => {
            var networkState =  navigator.connection.type;
            console.log(networkState);
            
            var states = {};
            states[Connection.UNKNOWN]  = 'Unknown connection';
            states[Connection.ETHERNET] = 'Ethernet connection';
            states[Connection.WIFI]     = 'WiFi connection';
            states[Connection.CELL_2G]  = 'Cell 2G connection';
            states[Connection.CELL_3G]  = 'Cell 3G connection';
            states[Connection.CELL_4G]  = 'Cell 4G connection';
            states[Connection.CELL]     = 'Cell generic connection';
            states[Connection.NONE]     = 'No network connection';
              alert('Connection type: ' + states[networkState]);
        });
    }

 
}