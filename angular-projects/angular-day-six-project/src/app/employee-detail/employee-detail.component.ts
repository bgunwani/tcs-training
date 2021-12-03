import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  id: any;
  employee: any;

  constructor(private _http: HttpClient, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get("id");
    this._http.get('http://localhost:3000/employees/' + this.id).subscribe(result => {
      this.employee = result;
    }, (error) => {
      console.log(error);
    })
  }

}
