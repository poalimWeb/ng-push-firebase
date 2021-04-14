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
    this.requestPermission();
    window.addEventListener('beforeinstallprompt', (e) => {
      console.log(e);
    });
    // this.listen();
  }

  handleAskPermissionClick(): void {
    this.btnState = 'clicked';
    this.requestPermission();
  }

  requestPermission(): void {
    this.afMessaging.requestPermission
      .pipe(mergeMapTo(this.afMessaging.tokenChanges))
      .subscribe(
        (token) => {
          this.token = token;
          console.log('Permission granted! Save to the server!', token);
        },
        (error) => {
          console.error(error);
        },
      );
  }

}
