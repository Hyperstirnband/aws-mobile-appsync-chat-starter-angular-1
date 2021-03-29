import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import User from '../types/user'


@Component({
  selector: 'app-modal',
  templateUrl: './chat-user-profile.component.html',
  styleUrls: ['./chat-user-profile.component.css']
})
export class ChatUserProfileComponent {

  me: User;

  ngOnInit() {}


  @ViewChild('ChatUserProfile') modal: ElementRef;

  open() {
    this.modal.nativeElement.style.display = 'block';
  }

  close() {
    this.modal.nativeElement.style.display = 'none';
  }





}
