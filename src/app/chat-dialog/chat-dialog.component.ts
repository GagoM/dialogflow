import { Component, OnInit } from '@angular/core';
import { ChatService, Message } from '../chat.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/scan';

@Component({
  selector: 'chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent implements OnInit {

  messages:Observable<Message[]>;
  formValue:string;
  image:string;
  constructor(private chat:ChatService) { }

  ngOnInit() {
    //appends to array after each new message is added to feedsource
    this.messages = this.chat.conversation
    .scan((acc,val)=>acc.concat(val));  
    // this.chat.talk();
  }
  sendMessage(){
    this.chat.converse(this.formValue);
    this.formValue = '';
  }

}
