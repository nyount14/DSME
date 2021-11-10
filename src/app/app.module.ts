import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HealthyEatingComponent } from './healthy-eating/healthy-eating.component';
import { PhysicalActivityComponent } from './physical-activity/physical-activity.component';
import { TakingMedicationsComponent } from './taking-medications/taking-medications.component';
import { PlanComponent } from './plan/plan.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { EducationComponent } from './education/education.component';
import { AssessmentListComponent } from './education/assessment-list/assessment-list.component';
import { AssessmentDetailComponent } from './education/assessment-list/assessment-detail/assessment-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { DropdownDirective } from './shared/dropdown.directive';
import { VisitComponent } from './visit/visit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HealthyEatingComponent,
    PhysicalActivityComponent,
    TakingMedicationsComponent,
    PlanComponent,
    AuthenticationComponent,
    EducationComponent,
    AssessmentListComponent,
    AssessmentDetailComponent,
    DropdownDirective,
    VisitComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent,
  ],

})
export class AppModule { }
