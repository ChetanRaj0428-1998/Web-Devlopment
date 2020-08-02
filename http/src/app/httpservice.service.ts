import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { DataInterface } from './datainterface';
import { Post } from './post';
import { Observable, from } from 'rxjs';
import {catchError,retry} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  
api_url="http://localhost:3000/data/"
  constructor(private http: HttpClient) { }
getData():Observable<DataInterface[]>
{
  return this.http.get<DataInterface[]>(this.api_url)
  .pipe(
    retry(3), // retry a failed request up to 3 times
    catchError((err) => {
      console.error("Error:"+err);
      throw err;
    }
  )
  )
}

postData(post:Post):Observable<any>
{
  return this.http.post(this.api_url,post);
}

deleteData(id)
{
return this.http.delete(this.api_url+id);
}

putData(post:Post, id)
{
return this.http.put(this.api_url+id,post);
}

}
