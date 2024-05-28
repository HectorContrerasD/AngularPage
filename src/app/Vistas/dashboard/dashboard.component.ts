import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Servicios/api/api.service';
import { RouterLink, RouterModule , Router} from '@angular/router';
import { GrupoI } from '../../Modelos/grupo.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  
})
export class DashboardComponent  {
  grupos : GrupoI[]=[]
  constructor(private api:ApiService, private router:Router){
    this.api.GetAll().subscribe((data:any)=>{
      this.grupos = data;
    })
  }
  onDelete(id:number){
    this.api.Delete(id);
  }
  ngOnInit(): void {
   
  }
  nuevoGrupo(){
    this.router.navigateByUrl('/nuevo')
  }
  editarGrupo(id:number){
    this.router.navigate(['/editar', id])
  }
}
