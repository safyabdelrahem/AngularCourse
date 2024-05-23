import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square',
  standalone: true
})
export class SquarePipe implements PipeTransform {

  // transform(value:number,pow:number):number {
  //   return Math.pow(value,pow);
  // }

  transform(idNumber:string,datePart:string):string {
    const year = idNumber.substring(1,2);
    const month = idNumber.substring(3,2);
    const day = idNumber.substring(5,2);
    const fullDate =`${day}-${month}-${'19'+year}`;

    switch (datePart) {
      case 'YY':
        return year;
      case 'MM':
        return month;
      case 'DD':
        return day;
      case 'FullDate':
        return fullDate;
      default:
        return '';
    }
    
  }

}
