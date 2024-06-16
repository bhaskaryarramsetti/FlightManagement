
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface UserRegisterDTO {
  userName: string;
  password: string;
  email: string;
}

export interface UserLoginDTO {
  userName: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = "https://localhost:7261/api/Auth"; 

  constructor(private http: HttpClient) {}

  register(user: UserRegisterDTO): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user);
  }

  login(user: UserLoginDTO): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, user);
  }
}