import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'p2'
})
export class P2Pipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    
    
    return value.toUpperCase();
  }

}

@Pipe({
  name: 'p3'
})
export class P3Pipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if (value.toLowerCase().indexOf('c') > -1) {
      return value.toLowerCase();
    }
    
    return value.toUpperCase();
  }

}
