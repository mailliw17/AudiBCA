import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Npwp } from '../components/index-profil/main-profil-npwp/npwp';
import { TokenStorageService } from './token-storage.service';

const BASE_URL =
  'http://ktp-service-website-lelang-bca-dev.apps.ocpdev.dti.co.id';

@Injectable({
  providedIn: 'root',
})
export class NpwpService {
  httpOptions_base = {
    headers: new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token.getToken()}`
    ),
  };

  constructor(private token: TokenStorageService, private http: HttpClient) {}

  getNpwpData(userId: any): Observable<Npwp> {
    return this.http.get<any>(
      `${BASE_URL}/npwp/user/${userId}`,
      this.httpOptions_base
    );
  }

  createNpwpData(npwp: Npwp, file: File): Observable<Npwp> {
    const formData: FormData = new FormData();
    formData.append('npwp', JSON.stringify(npwp));
    formData.append('file', file);
    return this.http.post<Npwp>(
      `${BASE_URL}/create/npwp`,
      formData,
      this.httpOptions_base
    );
  }

  updateNpwpData(id: any, npwp: Npwp, file: File): Observable<Npwp> {
    const formData: FormData = new FormData();
    formData.append('npwp', JSON.stringify(npwp));
    if (file != null) {
      formData.append('file', file);
    }
    return this.http.put<Npwp>(
      `${BASE_URL}/update/npwp/${id}`,
      formData,
      this.httpOptions_base
    );
  }

  updateNpwpImage(id: any, file: File): Observable<Npwp> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http.put<Npwp>(
      `${BASE_URL}/addFile/npwp/${id}`,
      formData,
      this.httpOptions_base
    );
  }

  deleteNpwpData(id: any): Observable<Npwp> {
    return this.http.delete<Npwp>(
      `${BASE_URL}/delete/npwp/${id}`,
      this.httpOptions_base
    );
  }
}
