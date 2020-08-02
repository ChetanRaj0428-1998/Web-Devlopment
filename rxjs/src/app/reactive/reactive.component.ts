import { Component, OnInit } from '@angular/core';
import {interval,of} from 'rxjs'
import {map, take} from 'rxjs/operators'
@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
export class ReactiveComponent implements OnInit {
secondscounter = interval(1000);
ofvar=of(1,2,3,4,5,6)
data;
operatorvar;

  constructor() {
    this.secondscounter
    .pipe(map(n=>n * 10))
    .subscribe(n =>
      this.data=n)

      this.operatorvar=this.ofvar.pipe(
        take(4),
        map(n=>n*n)
      ).subscribe(
        x => console.log(x) 
      )
  
   }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
  ngOnInit(): void {
  }

}
