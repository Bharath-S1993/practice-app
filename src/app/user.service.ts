import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = "http://localhost:5000/user"
  constructor(private http: HttpClient) { }

  saveUSer(data) {
    return this.http.post(this.url, data).toPromise();
  }
}
