import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
username;password;
  constructor(private Auth: ServiceService) { }

  ngOnInit() {
  }
loginUser()
{
  console.log(this.username+this.password); 
}
}
