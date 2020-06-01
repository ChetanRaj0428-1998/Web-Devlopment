import { Component, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { FeedbackFormService } from '../feedback-form.service';

@Component({
  selector: 'feedback',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {
  constructor( private service:FeedbackFormService)
  {

  }
test="Chetan";
SubmitForm(x)
{
  this.service.putData(x);
  this.service.putDat1(x.Fullname.firstname);
  this.service.putDat2(x.Fullname.lastname);
}

  ngOnInit() {
  }
log(x)
{
  console.log(x); 
}

contactMethod=[
  {value : "1", name: "phone"},{value : "2", name: "email"},{value : "3", name: "reference"}
]
}
