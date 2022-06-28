import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { catchError, map, throwError } from 'rxjs';

import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = "http://127.0.0.1:8000/";
  private jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post(
      this.url + "auth/token/",
      { email: email, password: password })
      .pipe(
        map((response: any) => {
          localStorage.setItem("token", response.access);
        }),
        catchError(this.handleError)
      )
  }

  logout() {
    localStorage.removeItem("token");
  }

  isAuthenticated() {
    const token = localStorage.getItem("token")

    if (!token) return false

    return !this.jwtHelper.isTokenExpired(token)
  }

  get currentUser() {
    const token = localStorage.getItem("token")
    if (!token) return null;
    return this.jwtHelper.decodeToken(token);
  }

  private handleError(err: Response) {
    return throwError(() => new Error("Invalid Credentials"));
  }
}
