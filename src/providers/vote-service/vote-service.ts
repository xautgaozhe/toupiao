import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { HttpService } from '../../providers/http-service';
/*
  Generated class for the VoteServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class VoteServiceProvider {

  API_URL = 'http://192.168.1.146:8080/voteService/webapi';
  constructor(public http: Http, private httpService:HttpService) {
    console.log('Hello VoteServiceProvider Provider');
  }

  getVoters(){
    let url = this.API_URL + "/VoterService";
    return this.httpService.httpGetNoAuth(url);
  }
  updateCount(counts:any){
    let url = this.API_URL + "/VoterService/updateCounts";
    return this.httpService.httpPostNoAuth(url, counts);
  }

  getVoterProfile(voterID:any){
    let url = this.API_URL + "/VoterService/profile/"+voterID;
    return this.httpService.httpGetNoAuth(url);
  }

}
