import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoginService {
  http = inject(HttpClient);

  userLogin(obj: any) {
    return this.http.post('https://dummyjson.com/user/login', obj);
  }
}
