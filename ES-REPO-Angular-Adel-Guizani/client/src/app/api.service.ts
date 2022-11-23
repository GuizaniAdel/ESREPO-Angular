import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  getMatieresById(id: string) {
    return this.http.get('matieress/' + id)
  }



  getCoursById(name: string) {

    return this.http.get('courss/' + name)
  }

  public addNewMessage(message: any) {

    return this.http.post('message/add', message);
  }
}
