import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mycurr'
})
export class CurrpipePipe implements PipeTransform {

  transform(value: number, currType: string="ind"): number {

    if (currType == "usd") {
      return value / 75;
    }else if(currType == "aud"){
      return value/53; 
    }else{
      return value
    }
  }

}
