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
    headers = headers.set('Authorization', process.env.firebase_auth);

    console.log(headers);
    return this.http.post(this.firebeseTestEndpoint, reqBody, {headers});
  }
}
