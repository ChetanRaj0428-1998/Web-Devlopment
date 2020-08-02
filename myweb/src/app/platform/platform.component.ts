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
      posts.firstname='Hi This is the body';
      posts.lastname='This is the title';
      posts.phone=223498;
      this.service.posts(posts)
      .subscribe(contact=>{
        this.temp.push(contact);
    
}

      ) 

}


}