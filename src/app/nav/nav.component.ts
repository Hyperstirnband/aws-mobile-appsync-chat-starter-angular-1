import { Router } from '@angular/router';
import { AmplifyService } from 'aws-amplify-angular';

//Stuff for Profile Button
import { Component, ViewChild } from '@angular/core';
import { ChatUserProfileComponent } from '../chat-app/chat-user-profile/chat-user-profile.component';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: []
})

export class NavComponent {
  isLoggedIn = false;

  constructor(private amplifyService: AmplifyService, public router: Router) {
    this.amplifyService.authStateChange$.subscribe(authState => {
      const isLoggedIn = authState.state === 'signedIn' || authState.state === 'confirmSignIn';
      if (this.isLoggedIn && !isLoggedIn) {
        router.navigate(['']);
      } else if (!this.isLoggedIn && isLoggedIn) {
        router.navigate(['/chat']);
      }
      this.isLoggedIn = isLoggedIn;
    });
  }

  public signOut() {
    this.amplifyService.auth().signOut();
  }
//Stuff for Profile Button
  @ViewChild(ChatUserProfileComponent) modal: ChatUserProfileComponent
    openModal() {
    this.modal.open();
 }

}
