import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { LayoutComponent } from '../layout/layout.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DoctorComponent } from '../doctor/doctor.component';
import { DoctorsearchComponent } from '../doctorsearch/doctorsearch.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: DashboardComponent, pathMatch: 'full' },
      { path: 'doctor', component: DoctorComponent },
      { path: 'search', component: DoctorsearchComponent }
    ]
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class RouteRoutingModule { }
