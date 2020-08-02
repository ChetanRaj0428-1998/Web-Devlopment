import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() recieve:string
@Output() send = new EventEmitter<string>()
childata="This string was sent from child"
  constructor() { 
    
  } 

  
    

  ngOnInit() {
    this.send.emit(this.childata);
      }

}
