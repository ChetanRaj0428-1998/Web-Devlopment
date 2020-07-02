import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Interface } from './interface';
import { Observable } from 'rxjs/internal/Observable';
import { Posts } from './post';

//Created this service to make APIs calls
 
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
private _url = "http://localhost:3000/api/contacts";

  getData(): Observable<any>
  {
    return this.http.get(this._url);
  }

posts(post:Posts): Observable<any>
{
  return this.http.post("https://jsonplaceholder.typicode.com/posts", post);
}
    
}
