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
  auth = '';
  headers = new HttpHeaders();

  sendNotification(token: string): Observable<any> {
    this.headers = this.headers.set('Content-Type', 'application/json');
    this.headers = this.headers.set('Authorization', this.auth);
    const reqBody = {
      notification: {
        title: 'Test message',
        body: 'test body'
      },
      to: token
    };
    return this.http.post(this.firebeseTestEndpoint, reqBody, {headers: this.headers});
  }

  getEnvKey(): void {
    this.http.get('/api/key').subscribe((res: any) => {
      this.auth = res.data;
    });
  }
}
