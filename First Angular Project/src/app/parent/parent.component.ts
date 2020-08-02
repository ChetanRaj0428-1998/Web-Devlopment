import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
parentdata="This string was sent from parent"
childdata:string
  constructor() { }

  recievedata(x:string)
  {
    this.childdata=x;
    
  }
  ngOnInit() {
  }

}
