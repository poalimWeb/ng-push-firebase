import {Component, OnInit} from '@angular/core';
import {MessagingService} from './messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'push-demo';
  nState = Notification.permission;
  btnState = '';
  constructor(private messaging: MessagingService) {
  }


  ngOnInit(): void {
    this.messaging.requestPermission();
    window.addEventListener('beforeinstallprompt', (e) => {
      console.log(e);
    });
    // this.listen();
  }

  handleAskPermissionClick(): void {
    this.btnState = 'clicked';
    this.messaging.requestPermission();
  }

}
