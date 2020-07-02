import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Interface } from '../interface';
import { Posts } from '../post';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.scss']
})
export class PlatformComponent implements OnInit {
temp:Interface[];
post: Posts;
  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.service.getData()
      .subscribe(data =>this.temp = data);
      var posts = new Posts();
      posts.body='Hi This is the body';
      posts.title='This is the title';
      posts.userId=98;
      this.service.posts(posts)
      .subscribe
      (
        data=>
        {
          this.post=data;
        }
      )
    
}





}