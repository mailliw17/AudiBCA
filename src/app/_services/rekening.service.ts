import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rekening } from '../components/index-profil/main-profil-rekening-bank/rekening';
import { TokenStorageService } from './token-storage.service';

const BASE_URL =
  'http://ktp-service-website-lelang-bca-dev.apps.ocpdev.dti.co.id';

@Injectable({
  providedIn: 'root',
})
export class RekeningService {
  httpOptions_base = {
    headers: new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token.getToken()}`
    ),
  };

  constructor(private token: TokenStorageService, private http: HttpClient) {}

  getRekeningDataFromIds(accountNumber: any): Observable<any> {
    return this.http.get<any>(
      `http://ids-service-website-lelang-bca-dev.apps.ocpdev.dti.co.id/ids/api/account/${accountNumber}`
    );
  }

  getRekeningData(userId: any): Observable<Rekening[]> {
    return this.http.get<Rekening[]>(
      `${BASE_URL}/rekening/user/${userId}`,
      this.httpOptions_base
    );
  }

  getRekeningDataById(id: any): Observable<Rekening[]> {
    return this.http.get<Rekening[]>(
      `${BASE_URL}/rekening/${id}`,
      this.httpOptions_base
    );
  }

  createRekeningData(rekening: any): Observable<Rekening> {
    return this.http.post<Rekening>(
      `${BASE_URL}/create/rekening`,
      rekening,
      this.httpOptions_base
    );
  }

  updateRekeningData(id: any, rekening: any): Observable<Rekening> {
    return this.http.put<Rekening>(
      `${BASE_URL}/update/rekening/${id}`,
      rekening,
      this.httpOptions_base
    );
  }

  deleteRekeningData(id: any): Observable<Rekening> {
    return this.http.delete<Rekening>(
      `${BASE_URL}/delete/rekening/${id}`,
      this.httpOptions_base
    );
  }
}
