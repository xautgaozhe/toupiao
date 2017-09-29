import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';


import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { Vote } from '../vote/vote';
import { HomePage } from '../home/home';
import {StorageService} from "../../providers/storage-service";
/**
 * Generated class for the Tabs1 page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-tabs1',
  templateUrl: 'tabs1.html',
})
export class Tabs1 {
  tab1Root = HomePage;
  tab2Root:any;
  tab3Root = ContactPage;
  constructor(public navCtrl: NavController, public navParams: NavParams,public storageService:StorageService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tabs1');
  }

  ngOnInit(){
    let token = this.storageService.read("account");
    if(token =="" || token==null){
      this.tab2Root = AboutPage;
    }else {
      this.tab2Root = Vote;
    }
  }
}
