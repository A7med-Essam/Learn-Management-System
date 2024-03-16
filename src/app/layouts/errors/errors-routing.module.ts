import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternalServer500Component } from './components/internal-server500/internal-server500.component';
import { NotFound404Component } from './components/not-found404/not-found404.component';
import { ErrorsLayoutComponent } from './errors-layout/errors-layout.component';

const routes: Routes = [
  {
    path:'',
    component:ErrorsLayoutComponent,
    children: [
      // {path:'500',component:InternalServer500Component},
      {path:'**',component:NotFound404Component},
    ]
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorsRoutingModule { }
