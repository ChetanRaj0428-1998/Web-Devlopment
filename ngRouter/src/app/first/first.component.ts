import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  constructor(private route: ActivatedRoute) {   
      this.route.params.subscribe(params => {
    console.log(params)
  });}

  ngOnInit(): void {

  }

}
