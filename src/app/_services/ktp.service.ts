import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ktp } from '../components/index-profil/main-profil-ktp/ktp';
import { TokenStorageService } from './token-storage.service';

const BASE_URL = 'http://10.1.137.50:8761';

@Injectable({
  providedIn: 'root',
})
export class KtpService {
  // token for get anything data
  httpOptions_base = {
    headers: new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token.getToken()}`
    ),
  };

  constructor(private token: TokenStorageService, private http: HttpClient) {}

  getKtpData(userId: any): Observable<Ktp> {
    return this.http.get<any>(
      `${BASE_URL}/ktp/user/${userId}`,
      this.httpOptions_base
    );
  }

  createKtpData(ktp: Ktp): Observable<Ktp> {
    const formData: FormData = new FormData();
    formData.append('ktp', JSON.stringify(ktp));
    return this.http.post<Ktp>(
      `${BASE_URL}/create/ktp`,
      formData,
      this.httpOptions_base
    );
  }

  updateKtpData(id: any, ktp: Ktp): Observable<Ktp> {
    const formData: FormData = new FormData();
    formData.append('ktp', JSON.stringify(ktp));
    return this.http.put<Ktp>(
      `${BASE_URL}/update/ktp/${id}`,
      formData,
      this.httpOptions_base
    );
  }

  updateFileKtp(id: any, file: File): Observable<Ktp> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http.put<Ktp>(
      `${BASE_URL}/addFile/ktp/${id}`, formData, this.httpOptions_base
    );
  }

  deleteKtpData(id: any): Observable<Ktp> {
    return this.http.delete<Ktp>(
      `${BASE_URL}/delete/ktp/${id}`,
      this.httpOptions_base
    );
  }
}
