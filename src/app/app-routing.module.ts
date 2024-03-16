import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthUserGuard } from './core/guards/auth-user.guard';

const routes: Routes = [

  {
    path:'',
    redirectTo:'auth',
    pathMatch:'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./layouts/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'landing',
    canActivate: [AuthUserGuard],
    loadChildren: () => import('./layouts/inner-layout/innerLayout.module').then(m => m.innerLayoutModule)
  },
  {
    path: 'dashboard',
    canActivate: [AuthUserGuard],
    loadChildren: () => import('./Modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: '**',
    loadChildren: () => import('./layouts/errors/errors.module').then(m => m.ErrorsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  {scrollPositionRestoration : "top" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
