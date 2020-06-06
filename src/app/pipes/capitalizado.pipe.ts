import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string, todas: boolean= true): string {
    console.log({value}); //con {} muestra la variable : valor y sin muestra solo valor en seco

    value = value.toLowerCase();

    let nombres = value.split(' ');

   if (todas){
     nombres = nombres.map(nombre => {
       return nombre = nombre[0].toUpperCase() + nombre.substr(1);

     })
     return nombres.join(' ')
   }
   else{
     
   }

    return   value;
  }

}
