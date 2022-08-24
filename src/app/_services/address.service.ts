import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenStorageService } from './token-storage.service';
import { Province } from '../_class/province';
import { Observable } from 'rxjs';
import { City } from '../_class/city';
import { Kecamatan } from '../_class/kecamatan';
import { Kelurahan } from '../_class/kelurahan';

const BASE_URL =
  'http://address-service-website-lelang-bca-dev.apps.ocpdev.dti.co.id';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  httpOptions_base = {
    headers: new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token.getToken()}`
    ),
  };

  constructor(private token: TokenStorageService, private http: HttpClient) {}

  getProvince(): Observable<Province[]> {
    return this.http.get<Province[]>(`${BASE_URL}/province/getAll`);
  }

  getCity(provinceName: string): Observable<City[]> {
    return this.http.get<City[]>(
      `${BASE_URL}/city/getAll/name?provinceName=${provinceName}`
    );
  }

  getKecamatan(cityName: string): Observable<Kecamatan[]> {
    return this.http.get<Kecamatan[]>(
      `${BASE_URL}/kecamatan/getAll/name?cityName=${cityName}`
    );
  }

  getKelurahan(kecamatanName: string): Observable<Kelurahan[]> {
    return this.http.get<Kelurahan[]>(
      `${BASE_URL}/kelurahan/getAll/name?kecamatanName=${kecamatanName}`
    );
  }
}
