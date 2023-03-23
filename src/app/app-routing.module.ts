import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
{ path: '', redirectTo: '/employees', pathMatch: 'full' },
{ path: 'employees', component: EmployeeListComponent, canActivate: [AuthGuard]},
{ path: 'employees/add', component: EmployeeFormComponent, canActivate: [AuthGuard] },
{ path: 'employees/edit/:id', component: EmployeeFormComponent, canActivate: [AuthGuard] },
{ path: 'login', component: LoginComponent },
{ path: '**', redirectTo: '/employee-list' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
