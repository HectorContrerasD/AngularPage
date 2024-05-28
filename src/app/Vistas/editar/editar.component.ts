import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { ApiService } from '../../Servicios/api/api.service';
import { GrupoI } from '../../Modelos/grupo.interface';
import { FormsModule } from '@angular/forms';
import { error } from 'console';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],

 
})
export class EditarComponent implements OnInit {

  datosGrupo: GrupoI | null = null;
 

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private api: ApiService
  ) { 
    this.api.Get(this.activatedRoute.snapshot.params['id'])
    .subscribe((data:any)=>{
      if (!data)
        this.router.navigate(['/']);
      this.datosGrupo = data;
    });
    
  }

  ngOnInit(): void {
   
  }

  postform(): void {
    
   const updated = {
    id: this.datosGrupo.id,
    nombre: this.datosGrupo.nombre,
    integrantes: this.datosGrupo.integrantes,
    fechaDebut : this.datosGrupo.fechaDebut,
    cantidadAlbums : this.datosGrupo.cantidadAlbums,
    imagen: this.datosGrupo.imagen
   };
   this.api.Put(parseInt(this.datosGrupo.id), this.datosGrupo)
   .subscribe((data:any)=>{
    this.router.navigate(['/dashboard']);
   })
,
   (error) =>{
    console.log(error)
   }
  }
  
  
}
