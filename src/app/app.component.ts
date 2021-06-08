import { Component } from '@angular/core';
import { Employee } from './employee';
import { Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ParentChild';


  students:Student[]=[
{
  sname:"Nilesh",
  rollno:1,
  city:"Pune",
  course: "Java"
},
{
  sname:"Aniket",
  rollno:2,
  city:"Satara",
  course: "Python"
}
,
{
  sname:"Ajinkya",
  rollno:3,
  city:"Akola",
  course: "Spring"
}
,
{
  sname:"Mahesh",
  rollno:4,
  city:"Buldhana",
  course: "PHP"
}



  ]

  outData:Employee[];
  employees:Employee[];
  getData(value)
  {
    this.outData=value;
  }


  onclick()
  {
    this.employees=this.outData;
  }
}
