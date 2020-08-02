import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../httpservice.service';
import { DataInterface } from '../datainterface';
import { Post } from '../post';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-httpclient',
  templateUrl: './httpclient.component.html',
  styleUrls: ['./httpclient.component.scss']
})
export class HttpclientComponent implements OnInit {
data=[];updateFlag;
 posts = new Post();
posting: DataInterface[]
  constructor(private httpService: HttpserviceService) { }

  ngOnInit(): void {
    this.get();
  }

get()
{

  this.httpService.getData()
  .subscribe(serverdata => this.data=serverdata);
  
}

post()
{
  this.httpService.postData(this.posts)
  .pipe(map(data=> this.get() ))
  .subscribe();
  
}

delete(id)
{
  this.httpService.deleteData(id)
  .subscribe();/*You are not using the result but you still have to subscribe. 
  Calling the subscribe() method executes the observable, which is what initiates the DELETE request.*/
this.get();
}

put(id)
{
  
 this.updateFlag=id;
  //console.log(this.posts.Name);
  if(this.posts.Name!=undefined)
  {this.httpService.putData(this.posts,id)
    .subscribe(postdata => console.log(postdata));
    this.updateFlag=''
    this.posts.Name=undefined
    this.get();
  }
  
}

}
