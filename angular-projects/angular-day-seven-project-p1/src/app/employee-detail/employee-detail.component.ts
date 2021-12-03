import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  id: any;
  employee: Employee = {
    id: 0,
    name: "",
    salary: 0,
    designation: ""
  };

  constructor(private _http: HttpClient,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get("id");
    this._http.get<Employee>('http://localhost:3000/employees/' + this.id).subscribe(result => {
      this.employee = result;
    }, (error) => {
      console.log(error);
    })
  }

  deleteEmployee() {
    this._http.delete('http://localhost:3000/employees/' + this.id).subscribe(result => {
      alert('Employee Deleted Successfully.');
      this._router.navigate(['/employees']);
    }, (error) => {
      console.log(error);
    })
  }

}
