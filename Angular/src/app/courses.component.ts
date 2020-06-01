import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector:'courses',//for making custom tags
    template: `<h2 style="color:red;">{{  name }}</h2>
    <h2 [textContent]="viewMode" style="color:green;"></h2>
    <button class="btn" [style.backgroundColor]="isSelected?'green':'red'" (click)="OnClick()">Click</button><!--Style binding same as class binding also (event_name) for triggering tasks on events-->
    <img src="{{ myImage}}" alt="spiderman"><br/>
    <label for="firstname"> input 1: </label>
    <input #myText (keyup.enter)="onKeyup1(myText.value)"/><br/><!--Event Filtering-->
    <label for="firstname"> input 2: </label>
    <input [(ngModel)]="name" (keyup.enter)="onKeyup2()"><!--Two way binding or use template variable with property or class binding-->
    <img [src]="myImage"/> <!--Propety Binding same as string interpolation but used for other things such as img url for some use attribute binding attr.attribute name-->
    <ul>
    <li *ngFor="let myvar of myarray">
    {{ myvar }}<!--String Interpolation from component to html-->
    </li>
    <div align="center" style="margin-right:750px;font-size:20px;">
<h1 align="right" style="margin-left:300px;"> Pipes Example:</h1>
<h2> <u>Regular O/P</u></h2>
    <b>Title:</b>  {{ mydata.title}} <br/>
    <b>Students:</b>{{ mydata.students }} <br/>
    <b>Rating:</b>{{ mydata.rating }} <br/>
    <b>Price:</b>{{ mydata.price }} <br/>
    <b>Date:</b>{{ mydata.releaseDate }}
    </div>
    <div align="right" style="margin-left:500px;margin-bottom:200px;margin-top:-235px;margin-right:500px;font-size:20px;    ">

    <h2><u> Formatted O/P </u></h2>
        {{ mydata.title | uppercase }} <br/>
        {{ mydata.students | number}} <br/>
        {{ mydata.rating | number:'2.1-1'}} <br/>
        {{ mydata.price | currency: 'INR': true: '2.1-2' }} <br/>
        {{ mydata.releaseDate | date: 'shortDate'}}
        </div>
        <div align="center" style="margin-top:-150px;"style="margin-bottom:250px;">
        <h4> <b>Explanation: </b>If we use the filter "2.1-1" on rating, the "2" is no. of zeroes that can appear on the left side of the decimal point along with the number.
        Whereas in the "1-1", the 1 to the right of the <strong style="font-size:30px;">"-"</strong> is the max limit of numbers that can appear on the right hand side of the decimal. And the 1 is max number limit along with the zeroes.<br/>
        <b>Note:  </b> Zeroes won't appear if there are numbers at that location already & if the filter is 1-1 then your value is round-figured.
        <br/><br/>       
        <pre>Example: Rating = 4.9745<br/>
                                  <u>Filter</u>             <u>Output</u>                
                 2.1-1              05.0
                  3.2-2             004.97 
                      4.7-7          0,004.9745000 
                      4.1-4             0,004.9745
                     3.5-6              004.97450
                      </pre>

        </h4>
        </div><br/>


        <div *ngIf="myarr.length > 0">
        Length of array is greater than 0
        </div>
        <div *ngIf="myarr.length == 0">
        Array Empty
        </div> 
        <div *ngIf="myarr.length > 0;then me else nome"></div>
        <ng-template #me><!--#identifier -> Template Variable-->
        Length of array is greater than 0 using  ng-template
        </ng-template>
        <ng-template #nome>
        Array Empty using ng-template
        </ng-template>
        <ul class="nav nav-pills">
        <li [class.active]="viewMode=='map'"(click)="onClickmap()"><a> Map View</a></li><!--Class binding to add or delete class dynamically based on some condition-->
        <li [class.active]="viewMode=='list'"(click)="onClicklist()"><a> List View</a></li>
        </ul>
        <h5><strong><u>ngSwitch Demo:</u></strong></h5>
        <div [ngSwitch]="viewMode">
        <div *ngSwitchCase="'map'">Map View Content</div>
        <div *ngSwitchCase="'list'">List View Content</div>
        <div *ngSwitchDefault>Otherwise</div>
        </div>

        <div>
        <h3> Star Rating System</h3>
        <div *ngIf="isSelected==true">
        <span class="glyphicon glyphicon-star" style="font-size:30px;" (click)="OnClick()"></span> <br/>
        </div>
        <div *ngIf="isSelected==false">
        <span class="glyphicon glyphicon-star-empty" style="font-size:30px;" (click)="OnClick()" ></span> <br/>
        </div>
        <div>
        <div *ngIf="isSelected==true" (click)="OnClick()">
        <span><img src="./assets/download.jpg" height="120px" width="60px"></span>
        </div>
        <div *ngIf="isSelected==false" (click)="OnClick()">
        <span><img src="https://media.comicbook.com/2019/07/batman-hush-1178768-1280x0.jpeg" height="80px" width="80px"></span>
        </div>
        </div>
    `//shows the HTML o/p and displays on the screen {{}} -> string inter polation
})
export class CoursesComponent{
    myImg=0;
    isSelected=true;
    mybool=true;
    myval="active";
name = "My name is Chetan Raj";
viewMode= "list";
myImage="";//./assets/download.jpg
myarr= [1];//keep the array empty and notice the change
mydata={
    title: "Pipes helps Us FoRmAt DaTa",
    rating:4.9745,
    students:30123,
    price: 190.95,
    releaseDate: new Date(2019, 6, 18 )
}
   imgClick()
   {
       this.myImg=this.myImg + 1;
   }
onClickmap()
{
    this.name="Map Button Clicked";
    this.viewMode="map"
    
}
onClicklist()
{
    this.name="List Button Clicked";
    this.viewMode="list"
    
}

onKeyup1(myText)
{
    this.mybool=false;
    this.name=myText;
}
onKeyup2()
{
    this.mybool=false;
    this.name=name;
}
OnClick()
{
    this.isSelected=!this.isSelected;
    
}
myarray;
    printName()
    {
        return this.name;
    }
    constructor( service: CoursesService)
    {
        this.myarray = service.getData();
        
    }
}
//to use the component, register it within a module