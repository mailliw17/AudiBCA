import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom, Observable } from 'rxjs';
import { User } from '../components/navbar/user';
import { TokenStorageService } from './token-storage.service';

const READ_PROFILE = 'http://10.1.137.50:8760/user/v1/';
const GET_BIDDING_BY_AOID_API = 'http://10.1.137.50:8768/getByAuctionObj/';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  // token for get anything data
  httpOptions_base = {
    headers: new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token.getToken()}`
    ),
  };

  constructor(
    private token: TokenStorageService,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  getUserData(): Observable<User> {
    return this.http.get<User>(READ_PROFILE, this.httpOptions_base);
  }

  getUserDataSync(): Promise<User> {
    return firstValueFrom(
      this.http.get<User>(READ_PROFILE, this.httpOptions_base)
    );
  }

  // numpang function dulu ya
  getLivePrice(id: any): Observable<any> {
    return this.http.get<any>(
      GET_BIDDING_BY_AOID_API + id,
      this.httpOptions_base
    );
  }

  updateUserData(id: any, user: User): Observable<User> {
    return this.http.put<User>(
      `${READ_PROFILE}/update/${id}`,
      user,
      this.httpOptions_base
    );
  }

  changePassword(form: any): Observable<User> {
    return this.http.post<User>(
      `${READ_PROFILE}/change-password`,
      form,
      this.httpOptions_base
    );
  }
}
