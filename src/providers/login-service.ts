import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*  providers */
import { HttpService } from './http-service'

/*
  Generated class for the LoginService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class LoginService {

  API_URL = 'http://192.168.1.146:8080/voteService/webapi';
  constructor(public http: Http,  private httpService:HttpService) {
    console.log('Hello LoginService Provider');
  }

  login(account:string){
    let url = this.API_URL + '/UserService/login/'+ account;
    return this.httpService.httpGetNoAuth(url);
  }

}
