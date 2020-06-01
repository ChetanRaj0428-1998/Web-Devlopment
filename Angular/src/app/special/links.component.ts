import { Component } from '@angular/core'

@Component(
    {
        selector: 'images',
        template: `<div style="background-color:red;margin-right:1200px;font-size:30px;">
        <h3>Links</h3>
        <ol>
        <a href="#"><li>Link 1</li></a>
        <a href="#"><li>Link 2</li></a>
        <a href="#"><li>Link 3</li></a>
        </ol>
        </div>

        <div>
        <img src="{{ sendPath()}}" alt="spiderman"><br/> 
        <p><strong>My loaction:</strong></p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.23691643451!2d78.5043457148758!3d17.352329188099684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98687e3c734b%3A0xc0a8b00e31523791!2sHyderabad%2C+Telangana+500059!5e0!3m2!1sen!2sin!4v1563348190632!5m2!1sen!2sin" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
        </div>
        `
       }
)

export class LinksCourses
{
    
myImage='C:\Users\benny\Desktop\Internship\spiderman.jpg';

    sendPath()
    {
        return this.myImage;
    }
}