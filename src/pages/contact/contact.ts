import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import { CommonFunc } from '../../providers/common-func';
import { CommentService } from '../../providers/comment-service';
import { StorageService } from '../../providers/storage-service';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  requireWarnning:any;
  submitForm1:FormGroup;
  info:any;
  coms:any;
  constructor(public navCtrl: NavController,public formBuilder:FormBuilder, private commentService:CommentService,private storageService:StorageService,
  private  commFunc:CommonFunc) {
    this.submitForm1 = formBuilder.group({
      info:['',Validators.minLength(11)]
    });
    this.info = this.submitForm1.controls['info'];

  }
//获取用户评论列表
  getComments(){
    this.commentService.getComList().then((data)=>{
      this.coms = data;
    })
  }
  checkEmpty(){
    if (this.submitForm1.value.info.toString()!=""){
      this.requireWarnning="";
    }
  }

  addComment(comment:any){
    let account = this.storageService.read('account').toString();
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('comContent',comment.info);
    urlSearchParams.append('account',account);
    let body = urlSearchParams.toString();
    alert(body);

    this.commentService.submitComments(body).then( data =>{
      this.getComments();
    })
    this.submitForm1.controls['info'].setValue("");
  }
}
