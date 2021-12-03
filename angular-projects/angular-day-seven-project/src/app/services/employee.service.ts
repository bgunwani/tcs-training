import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

const ROUTE_URL: string = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this._http.get<Employee[]>(`${ROUTE_URL}/employees`)
  }

  getEmployeeById(id: any): Observable<Employee> {
    return this._http.get<Employee>(`${ROUTE_URL}/employees/${id}`)
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this._http.post<Employee>(`${ROUTE_URL}/employees`, employee);
  }

  updateEmployee(id: any, employee: Employee): Observable<Employee> {
    return this._http.put<Employee>(`${ROUTE_URL}/employees/${id}`, employee);
  }

  deleteEmployee(id: any) {
    return this._http.delete(`${ROUTE_URL}/employees/${id}`);
  }


}
