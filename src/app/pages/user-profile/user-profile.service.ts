import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserProfile } from './user-profile.model';

@Injectable({providedIn: 'root'})
export class UserProfilePageService {
  constructor() { }
  http = inject(HttpClient)


  userDetail(): Observable<UserProfile>{
    return this.http.get<UserProfile>('https://dummyjson.com/users/1')
  }
}
