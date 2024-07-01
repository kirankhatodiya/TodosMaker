import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Models/userModel';

@Injectable({
  providedIn: 'root'
})
export class ObservableServiceService {

  constructor(private http : HttpClient) { }
  
  sendUsers():Observable<any>
  {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
