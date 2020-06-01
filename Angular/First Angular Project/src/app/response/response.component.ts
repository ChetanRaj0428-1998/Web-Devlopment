import { Component, OnInit } from '@angular/core';
import { FeedbackFormService } from '../feedback-form.service';
import { FeedbackFormComponent } from '../feedback-form/feedback-form.component';

@Component({
  selector: 'response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {
myarr;num1;value;value1;
num2;
diff1;diff2;diff3;
sum1;sum2;sum3;
dateTime=new Date();
dateTime1=new Date();
constructor(private service: FeedbackFormService) 
{
  
this.myarr=service.getData();
this.value=service.getData1();
this.value1=service.getData2();
console.log("value",this.value);
console.log("value1",this.value1);
this.num1=service.getDat1();
let times = this.num1.split(':');
   this.dateTime.setHours(parseInt(times[0]));
   this.dateTime.setMinutes(parseInt(times[1]));
   this.dateTime.setSeconds(parseInt(times[2]))

   this.num2=service.getDat2();
   let times2 = this.num2.split(':');
      this.dateTime1.setHours(parseInt(times2[0]));
      this.dateTime1.setMinutes(parseInt(times2[1]));
      this.dateTime1.setSeconds(parseInt(times2[2]))

    if(this.value!=this.value1)
    {
      if( this.value == 'PM' && this.value1=='AM'||this.value == 'AM' && this.value1=='PM'  )//if pm and if < 12 add 12
      {
        
    if(parseInt(times2[0])<12 && times[0]==12)
    {  
    times2[0]=parseInt(times2[0])+24;
        console.log("if1",times2[0]);
        console.log("gender1if", this.myarr[0].Fullname.gender1);
        
      }
      else
      {
        times2[0]=parseInt(times2[0])+12;
        console.log("else1",times2[0]);
        console.log("gender1else", this.myarr[0].Fullname.gender1);
      }
    }
   

  }
      

     else
      {
        if(parseInt(times2[0])<times[0])

        times2[0]=parseInt(times2[0])+12;
        console.log("else1",times2[0]);
        console.log("gender1else", this.myarr[0].Fullname.gender1);
      }


      if(parseInt(times2[1]) < parseInt(times[1]))//for minutes
      {
        times2[1]=parseInt(times2[1])+60;
        times2[0]=parseInt(times2[0])-1;
        console.log("if2",times2[1]);
        console.log("if2",times2[0]);
      }

      if(parseInt(times2[2]) < parseInt(times[2]))//for seconds
      {
        times2[2]=parseInt(times2[2])+60;
        times2[1]=parseInt(times2[1])-1;
        console.log("if3",times2[2]);
        console.log("if3",times2[1]);
      }

  this.diff1=times2[0]-times[0];
  this.diff2=times2[1]-times[1];
  this.diff3=times2[2]-times[2];
this.service.putDat(this.diff1,this.diff2,this.diff3);  
}
save()
{
this.sum1=this.service.time[0]+this.service.time[3]+this.service.time[6];
this.sum2=this.service.time[1]+this.service.time[4]+this.service.time[7];
this.sum3=this.service.time[2]+this.service.time[5]+this.service.time[8];
}
 
  ngOnInit() {
  }

}
