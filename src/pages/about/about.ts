import { Component } from '@angular/core';
import {FormBuilder, FormGroup,Validators} from '@angular/forms';
import { NavController } from 'ionic-angular';

import { Vote } from '../vote/vote';

/*  providers */
import {LoginService} from "../../providers/login-service";
import { StorageService } from '../../providers/storage-service';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  //phoneNum:any;
  requireWarnning:any;
  submitForm:FormGroup;
  constructor(public navCtrl: NavController,public formBuilder: FormBuilder, private loginService: LoginService,private storageService:StorageService) {
  this.submitForm = formBuilder.group({
    account:['',Validators.minLength(11)]
  });
    //this.phoneNum = this.submitForm.controls['account'];
    this.requireWarnning="";
  }

  loginForm(){
   if (this.submitForm.value.account.toString()==""){
      this.requireWarnning="内容不能为空";
    }else if(!this.checkPhone()) {
      this.requireWarnning = '请输入正确的11位手机号码！'
    }else {
     let account = this.submitForm.value.account.toString();
     this.loginService.login(account).then( data => {
       if(data.status == "exist"){
         this.storageService.write("account",account);
         this.navCtrl.push(Vote);
       }else {
         this.requireWarnning ="用户名错误！"
       }
     });
    }
  }

  checkEmpty(){
    if (this.submitForm.value.account.toString()!=""){
      this.requireWarnning="";
    }
  }

  checkPhone():boolean{
    let flag = false;
    let phone=/^(13[0-9]|15[012356789]|17[03678]|18[0-9]|14[57])[0-9]{8}$/;
    if(phone.test(this.submitForm.value.account.toString())){
      this.requireWarnning="";
      flag = true;
    }else {
      this.requireWarnning ="请输入正确的11手机位号码！";
      flag = false;
    }
    return flag;
  }
}
