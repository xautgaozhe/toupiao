import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import {App } from 'ionic-angular';

import {Profile} from "../profile/profile";
import {Profile2} from "../profile2/profile2";
import {VoteServiceProvider} from "../../providers/vote-service/vote-service";
import { TSMap } from 'typescript-map';

/**
 * Generated class for the Vote page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-vote',
  templateUrl: 'vote.html'
})
export class Vote {
  map={};
  countInfo=new TSMap<string,string>();
  items=[];
  flag1:any;
  profiles={};
  private count:number;
  constructor(public navCtrl: NavController, public navParams: NavParams, public app:App, private voteService:VoteServiceProvider) {
    this.flag1 = true;
    this.count =0;
    this.profiles = {'001':'profile','002':'profile2','003':'profile3','004':'profile4'}
    this.getVoterInfo();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Vote');
  }

  clickDisableBtn(element,item){

    if (element.textContent.toString()=="选择"){
      if (this.count<5){
        this.count++;
        element.textContent="已选择";
        element.style="background-color:#8c8c8c";
        this.map[item.voterId.toString()]=item.voterId.toString();
        this.countInfo.set(item.voterId.toString(),item.voterId.toString());
      }else {
        alert("一次最多选择5位！")
      }

    }else {
      this.countInfo.delete(item.voterId.toString());
      this.map[item.voterId.toString()]="";
      element.textContent = "选择";
      element.style="background-color: #007aff";
      this.count--;
    }
  /*  if(this.flag1){
      this.flag1=false;

    }*/
  }

  btnVote(){
    let count_list = JSON.stringify(this.countInfo.toJSON());
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append("Ct",count_list);
    let body = urlSearchParams.toString();
    if (this.count<10){
      alert("还差"+(10-this.count)+"位")
    }
      this.voteService.updateCount(body).then((data)=>{
        this.count =0;
        this.map={};
        this.getVoterInfo();
      })

  }

  getProfile(item:any){
   let num =item.voterId;
    this.app.getRootNav().push(Profile,num);
/*    switch (num)
    {
      case'001':
        this.app.getRootNav().push(Profile,);
        break;
      case'002':
        this.app.getRootNav().push(Profile2);
        break;
      case'003':
        this.app.getRootNav().push(Profile2);
        break;
      case'004':
        this.app.getRootNav().push(Profile);
        break;
      default:
        this.app.getRootNav().push(Profile);
        break;
    }*/
  }

  getVoterInfo(){
    this.voteService.getVoters().then((data)=>{
      console.log(data);
      this.items = data;
    })
  }
  /*发表评论*/
}
