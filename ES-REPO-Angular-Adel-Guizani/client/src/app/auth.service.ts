import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  getToken(){
    return sessionStorage.getItem('access_token');
  }

}
