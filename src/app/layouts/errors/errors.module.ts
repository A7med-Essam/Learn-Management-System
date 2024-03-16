import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorsRoutingModule } from './errors-routing.module';
import { InternalServer500Component } from './components/internal-server500/internal-server500.component';
import { NotFound404Component } from './components/not-found404/not-found404.component';
import { ErrorsLayoutComponent } from './errors-layout/errors-layout.component';


@NgModule({
  declarations: [
    InternalServer500Component,
    NotFound404Component,
    ErrorsLayoutComponent
  ],
  imports: [
    CommonModule,
    ErrorsRoutingModule
  ]
})
export class ErrorsModule { }
