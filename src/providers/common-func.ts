import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AlertController } from 'ionic-angular';
/*
  Generated class for the CommonFunc provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class CommonFunc {

  constructor(public http: Http, private alertCtrl:AlertController) {
    console.log('Hello CommonFunc Provider');
  }

  //定义弹出框
  showAlert(content:string) {
    let alert = this.alertCtrl.create({
      subTitle: content,
      buttons: ['OK']
    });
    alert.present();
  }
}
