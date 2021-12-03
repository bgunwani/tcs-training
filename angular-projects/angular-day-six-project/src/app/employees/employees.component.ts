import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employeeList: Employee[] = [];

  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
    this._http.get<Employee[]>('http://localhost:3000/employees')
      .subscribe(result => {
        this.employeeList = result;
      }, (error) => {
        console.log(error);
      })
  }

}
