import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthUserGuard } from 'src/app/core/guards/auth-user.guard';
import { LandingComponent } from './components/landing/landing.component';
import { innerLayoutComponent } from './innerLayout.component';

const routes: Routes = [
  {
    path:'',
    component:innerLayoutComponent,
    children: [
      {path:'',redirectTo:'home',pathMatch:'full'},
      {
        path:'home',
        component:LandingComponent
      },
      {
        path: 'certifications',
        canActivate: [AuthUserGuard],
        loadChildren: () => import('../../Modules/quiz/quiz.module').then(m => m.QuizModule)
      },
      {
        path: 'profile',
        canActivate: [AuthUserGuard],
        loadChildren: () => import('../../Modules/profile/profile.module').then(m => m.ProfileModule)
      },
      {
        path: 'topics/:id',
        canActivate: [AuthUserGuard],
        loadChildren: () => import('../../Modules/topic/topic.module').then(m => m.TopicModule)
      },
      {
        path: 'categories/:id',
        canActivate: [AuthUserGuard],
        loadChildren: () => import('../../Modules/category/category.module').then(m => m.CategoryModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class innerLayoutRoutingModule { }
