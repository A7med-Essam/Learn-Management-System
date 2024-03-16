import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertNumbersPipe } from './pipes/convert-numbers.pipe';
import { ConvertToSecondsPipe } from './pipes/convert-to-seconds.pipe';



@NgModule({
  declarations: [
    ConvertNumbersPipe,
    ConvertToSecondsPipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ConvertToSecondsPipe,
    ConvertNumbersPipe,
  ]
})
export class SharedModule { }
