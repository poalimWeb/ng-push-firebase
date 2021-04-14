import {Injectable} from '@angular/core';
import {AngularFireMessaging} from '@angular/fire/messaging';
import {BehaviorSubject, Observable} from 'rxjs';
import {mergeMap, mergeMapTo} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {
  currentMessage = new BehaviorSubject(null);

  constructor(private afMessaging: AngularFireMessaging) {
  }


  /**
   * @description ask user for permission not recieve notification
   */
  requestPermission(): void {
    this.afMessaging.requestPermission
      .pipe(mergeMapTo(this.afMessaging.tokenChanges))
      .subscribe(
        (token) => {
          console.log('Permission granted! Save to the server!', token);
        },
        (error) => {
          console.error(error);
        },
      );
  }
}
