import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { MainComponent } from './components/main/main.component';
import { SummaryComponent } from './components/summary/summary.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  {
    path:'',
    component:QuizComponent,
    children: [
      {path:'',redirectTo:'over-view/:id',pathMatch:'full'},
      {
        path:'over-view/:id',
        component:CertificationsComponent
      },
      {
        path:'quiz/:id',
        component:MainComponent
      },
      {
        path:'summary/:score/:totalQuestions',
        component:SummaryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule { }
