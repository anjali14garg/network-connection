import {Component} from '@angular/core';
import {Page, Platform, NavController} from 'ionic-angular';
import { BarcodeScanner } from 'ionic-native';
 
@Component({
    templateUrl: 'build/pages/barcode/barcode.html'
})
export class BarcodePage {
    
 
    constructor(private platform: Platform,private navController:NavController) {
       
    }
 
    scan() {
       this.platform.ready().then(() => {
          BarcodeScanner.scan().then((barcodeData) => {
          alert("We got a barcode\n" +
                "Result: " + barcodeData.text + "\n" +
                "Format: " + barcodeData.format + "\n" +
                "Cancelled: " + barcodeData.cancelled);
     }, (err) => {
    alert("Scanning Failed" + err);
});
    } )  
}
}