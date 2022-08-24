import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token'
const USER_KEY = 'auth-user'
const REFRESH_TOKEN = 'refresh-token'

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signOut(): void {
    window.sessionStorage.clear()
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY)
    window.sessionStorage.setItem(TOKEN_KEY, token)
  }

  public saveRefreshToken(refToken:string) : void {
    window.sessionStorage.removeItem(REFRESH_TOKEN)
    window.sessionStorage.setItem(REFRESH_TOKEN, refToken)
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY)! //non-null assertion
  }

  public getRefreshToken():string {
    return sessionStorage.getItem(REFRESH_TOKEN)!
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY)
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    return JSON.parse(sessionStorage.getItem(USER_KEY)!) //non-null assetio
  }

}
