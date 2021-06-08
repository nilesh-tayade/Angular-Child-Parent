import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Employee } from '../employee';
import { Student } from '../student';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  slist:Student[];
  ngOnInit(): void {
  }

  @Input() studentList:Student[];

  onclick()
  {
this.slist=this.studentList;

  }

employees :Employee[]=[
{
  eid:1,
  ename:"Sachin Tendulkar",
  department:"IT",
  salary  :45000
},
{
  eid:2,
  ename:"M S Dhoni",
  department:"Testing",
  salary  :60000
}
,
{
  eid:3,
  ename:"Suresh  Raina",
  department:"Spring",
  salary  :53000
}
,
{
  eid:4,
  ename:"Virat Kohli",
  department:"Janitor",
  salary  :33000
}


]

@Output() outputData:EventEmitter<Employee[]>= new EventEmitter();

outData:string="This is data From child";   

sendData()
{
  this.outputData.emit(this.employees);
}

}
