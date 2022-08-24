import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const AUTH_API = 'http://10.1.137.50:8760/user/v1/';
const VERIFY_EMAIL_API =
  'http://10.1.137.50:8080/auth/user/v1/verification-link/';

// for passing data for POST
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private token: TokenStorageService) {}

  login(credentials: any): Observable<any> {
    return this.http.post(
      AUTH_API + 'login',
      {
        email: credentials.email,
        password: credentials.password,
      },
      httpOptions
    );
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'logout', {
      refreshToken: this.token.getRefreshToken(),
    });
  }
}
