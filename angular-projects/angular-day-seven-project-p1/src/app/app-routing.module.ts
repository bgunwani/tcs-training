import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ContactReactiveComponent } from "./contact-reactive/contact-reactive.component";
import { ContactTemplateComponent } from "./contact-template/contact-template.component";
import { ContactComponent } from "./contact/contact.component";
import { EmployeeAddComponent } from "./employee-add/employee-add.component";
import { EmployeeDetailComponent } from "./employee-detail/employee-detail.component";
import { EmployeeUpdateComponent } from "./employee-update/employee-update.component";
import { EmployeesComponent } from "./employees/employees.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { SupportComponent } from "./support/support.component";

export const applicationRoutes: Routes = [
    // { path: '', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'support', component: SupportComponent },
    { path: 'employees', component: EmployeesComponent },
    { path: 'employee-detail/:id', component: EmployeeDetailComponent },
    { path: 'employee-update/:id', component: EmployeeUpdateComponent },
    { path: 'employee-add', component: EmployeeAddComponent },
    { path: 'contact-template', component: ContactTemplateComponent },
    { path: 'contact-reactive', component: ContactReactiveComponent },
    { path: '**', component: PageNotFoundComponent }
]