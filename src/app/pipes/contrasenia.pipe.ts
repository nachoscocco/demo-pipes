import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasenia'
})
export class ContraseniaPipe implements PipeTransform {

  transform(value: string, opcion: boolean): string {
    console.log({opcion});
    let arregloContra= value.split(' ');
    if (opcion) {
      
      for (let index = 0; index < value.length; index++) {
       arregloContra[index]='*';   
      }
    }
    return arregloContra.join(' ');

  }

}
