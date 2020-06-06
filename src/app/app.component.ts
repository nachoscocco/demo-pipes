import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nombre     :string   = "Monkey D' Luffy";
  nombre2: string ="vINsmOkE sAnjI kUROaShi"
  personajes :string[] = ["Luffy","Zoro","Sanji","Nami"];
  arreglo    :number[] = [1,2,3,4,5,6,7,8,9,10];
  PI         : number  = Math.PI;
  porcentaje :number   = 0.234;
  salario    :number   = 1234.5;
  fecha      :Date     =new Date();
  idioma     :string   ='es';
  capital    :boolean  =true;
  activar    :boolean  =true;
  videoUrl   : string  ="https://www.youtube.com/embed/SWZ_4YBFBhs"
  valorPromesa= new Promise<string>( (resolve, reject)=>{
  
      setTimeout(() => {
        resolve('llego la data')
      }, 5000);

  })


  pirata={
    nombre:'Sanji',
    clave:'Piernas Negras',
    edad:20,
    direccion:{
      barco:'Going Merry',
      ubicacionActual:'New World'
    }
  }


}
