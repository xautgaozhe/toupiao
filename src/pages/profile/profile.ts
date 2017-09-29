import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import {VoteServiceProvider} from "../../providers/vote-service/vote-service";
/**
 * Generated class for the Profile page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class Profile {

  content:any;
  vId:any;
  constructor( public navParams: NavParams,public voteService:VoteServiceProvider) {
    this.vId = this.navParams.data;
    this.getVoterProfile(this.vId);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Profile');

  }

  getVoterProfile(voterID:any){
    let vId = voterID;
    this.voteService.getVoterProfile(vId).then(data=>{
      this.content = data.profile;
    })

  }
}
