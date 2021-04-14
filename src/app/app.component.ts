import {Component, OnInit} from '@angular/core';
import {MessagingService} from './messaging.service';
import {mergeMapTo} from 'rxjs/operators';
import {AngularFireMessaging} from '@angular/fire/messaging';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'push-demo';
  nState = Notification.permission;
  btnState = '';
  token: any;

  constructor(private afMessaging: AngularFireMessaging) {
  }


  ngOnInit(): void {
    this.addPromptInstall();
    this.requestPermission();
    this.listen();
  }

  handleAskPermissionClick(): void {
    this.btnState = 'clicked';
    this.requestPermission();
  }

  listen(): void {
    this.afMessaging.messages
      .subscribe((message) => {
        console.log(`revieved message:${message}`);
      });
  }

  addPromptInstall(): void {
    window.addEventListener('beforeinstallprompt', (e) => {
      console.log(e);
    });
  }

  requestPermission(): void {
    this.afMessaging.requestToken
      .subscribe(
        (token) => {
          this.token = token;
          console.log('Permission granted!');
          console.log('Token =', token);
        },
        (error) => {
          console.error(error);
        },
      );
  }

}
