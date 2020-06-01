import { Component, Injectable } from '@angular/core';
export class FeedbackFormService
{
  signin="0:0:0";
  signout="0:0:0";
  feedback=[];
  time=[];
  value="";
  value1="";
  putData(x)
  {
this.feedback.push(x);
this.value=x.Fullname.gender1;
this.value1=x.Fullname.gender;
console.log(x);
  }
    getData()
    {  
     return this.feedback;
    }
    getData1()
    {  
     return this.value;
    }
    getData2()
    {  
     return this.value1;
    }
    putDat1(x)
  {
this.signin=x;
  }
  putDat2(x)
  {
this.signout=x;
  }
  getDat1()
  {
return this.signin;
  }
  getDat2()
  {
    return this.signout;
  }

  putDat(x1,x2,x3)
  {
    this.time.push(x1);
    this.time.push(x2);
    this.time.push(x3);
    console.log("service",this.time);
  }

  getDat()
  {
    return this.time;
  }


}