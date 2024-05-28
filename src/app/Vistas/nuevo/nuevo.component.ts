import { Component } from '@angular/core';
import { GrupoI } from '../../Modelos/grupo.interface';
import { ApiService } from '../../Servicios/api/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrl: './nuevo.component.css'
})
export class NuevoComponent {
   grupo: GrupoI ={
    id:'',
    nombre:'',
    integrantes:'',
    fechaDebut: new Date,
    cantidadAlbums:0,
    imagen:''
   };
   
   onSubmit(){
     const nuevoGrupo=
     {
        id: this.grupo.id,
        nombre: this.grupo.nombre,
        integrantes: this.grupo.integrantes,
        fechaDebut: this.grupo.fechaDebut,
        cantidadAlbums: this.grupo.cantidadAlbums,
        imagen: this.grupo.imagen
     };
     this.api.Create(nuevoGrupo).subscribe((data:any)=>{
      this.router.navigate(['/dashboard'])
     })
     
   }
   constructor(private api:ApiService,private router:Router){

   }
};
