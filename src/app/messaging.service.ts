import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {
  constructor(private http: HttpClient) {
  }

  firebeseTestEndpoint = 'https://fcm.googleapis.com/fcm/send';

  sendNotification(token: string): Observable<any> {
    const reqBody = {
      notification: {
        title: 'BankHapoalim',
        body: 'dafna'
      },
      to: token
    };
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Authorization', 'key=AAAA1txfb9s:APA91bEyBN4wxVDWrOhVHJGTVhJCDto2kod49J2a--NzXkhvRD0bnq4tsLcs6_BKYPMOLaxlyIHYqZUbypm84tk7oZexBcPWx4_9xOywOyc4qKdatDYFAHMs8Idey64B8cfLGhRLPcnx');

    console.log(headers);
    return this.http.post(this.firebeseTestEndpoint, reqBody, {headers});
  }
}
