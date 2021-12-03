import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { applicationRoutes } from './app-routing.module';
import { SupportComponent } from './support/support.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { ContactTemplateComponent } from './contact-template/contact-template.component';
import { ContactReactiveComponent } from './contact-reactive/contact-reactive.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    SupportComponent,
    EmployeesComponent,
    EmployeeDetailComponent,
    PageNotFoundComponent,
    EmployeeAddComponent,
    ContactTemplateComponent,
    ContactReactiveComponent,
    EmployeeUpdateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(applicationRoutes)
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
