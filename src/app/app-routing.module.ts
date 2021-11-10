import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthyEatingComponent } from './healthy-eating/healthy-eating.component';
import { PhysicalActivityComponent } from './physical-activity/physical-activity.component';
import { TakingMedicationsComponent } from './taking-medications/taking-medications.component';
import { VisitComponent } from './visit/visit.component';

const routes: Routes = [
  // path
  // component
  // redirectTo
  // localhost4200/home
  // {
  //   path: 'home', component: HomeComponent
  // }
  {path: 'healthyEating', component: HealthyEatingComponent},
  {path: 'takingMedication', component: TakingMedicationsComponent},
  {path: 'physicalActivity', component: PhysicalActivityComponent},
  {path: 'visit', component: VisitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
