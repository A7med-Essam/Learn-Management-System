import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertNumbers'
})
export class ConvertNumbersPipe implements PipeTransform {

  transform(value: number): string {
    let data:string = "";

    switch (value) {
      case 1:
          data="first-level"
        break;
        case 2:
          data="second-level"
        break;
        case 3:
          data="third-level"
        break;
        case 4:
          data="level 4"
        break;
        case 5:
          data="fifth-level"
        break;
        case 6:
          data="sixth-level"
        break;
        case 7:
          data="level 7"
        break;
        case 8:
          data="eighth-level"
        break;
        case 9:
          data="ninth-level"
        break;
        case 10:
          data="tenth-level"
        break;
      default:
          data=`level ${value}`
        break;
    }

    return data;
  }

}
