import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {HttpService} from "./http-service";

/*
  Generated class for the CommentService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class CommentService {
  API_URL = 'http://192.168.1.146:8080/voteService/webapi';
  constructor(public http: Http, private httpService:HttpService) {
    console.log('Hello CommentService Provider');
  }

  submitComments(content:any){
    let url =this.API_URL + '/CommentService/addCm';
    return this.httpService.httpPostNoAuth(url,content);
  }

  getComList(){
    let url = this.API_URL + '/CommentService';
    return this.httpService.httpGetNoAuth(url);
  }
}
