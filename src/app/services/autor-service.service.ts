import { Injectable } from '@angular/core';
import { Autor } from '../models/autor.interface';

@Injectable({
  providedIn: 'root'
})
export class AutorService {
//***********
private autores:Autor[]=[
  {
    id:1,
    nombre:'Claudia Lars',
    pais:'El Salvador',
    genero:'Cuentos',
    year:1930,
    libros:[
      {id:1,nombre:'Estrellas en el pozo',year:1960},
      {id:2,nombre:'Cuentos de miedo',year:1960}
    ]
},
{
  id:2,
  nombre:'Alfredo Espino',
  pais:'El Salvador',
  genero:'Cuentos',
  year:1920,
  libros:[
    {id:1,nombre:'Cuentos de barro',year:1950}
  ]
},
{
  id:3,
  nombre:'Roque Dalton',
  pais:'El Salvador',
  genero:'Poemas',
  year:1960,
  libros:[
    {id:1,nombre:'Poemas del alma',year:1950}
  ]
}
];

//***********
  constructor() { }

  ListadoAutores():Autor[]{
    return this.autores;
  }

  InsertarAutor(autor:Autor){
    this.autores.push(autor);
  }

  ObtenerUno(id:number):Autor{
    
    return <Autor>this.autores.find(item=>item.id===id)

  }

}
