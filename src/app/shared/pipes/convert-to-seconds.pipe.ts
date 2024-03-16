import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToSeconds'
})
export class ConvertToSecondsPipe implements PipeTransform {

  transform(value: number): number {
    if (value < 1) {
      return value*60
    } 
    else {
      return value;
    }
  }

}
