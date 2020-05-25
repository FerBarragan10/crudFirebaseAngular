import { Component, OnInit } from '@angular/core';
import { CervezaService } from 'src/app/services/cerveza.service';
import { CervezaModel } from 'src/app/models/Cerveza.models';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cargando:boolean=true;
  vacio:boolean=true;
  cerveza=new CervezaModel()
  cervezas:CervezaModel[]=[];
  constructor(private cervezaService:CervezaService) { }

  ngOnInit(){
    if(this.listarCervezas()==null){
      this.vacio=true;
    }
    else if(this.listarCervezas()!=null){
      this.vacio=false;

    }
  }
  listarCervezas(){
    this.cervezaService.obtenerCervezas().subscribe((data:any)=>{
      console.log(data);
      this.cervezas=data;

      this.cargando=false;
    })
  }
  borrarCerveza( beer: CervezaModel, i: number ) {
    console.log(beer);
    Swal.fire({
      title: '¿Está seguro?',
      text: `Está seguro que desea borrar a la cerveza ${ beer.nombre }`,
      showConfirmButton: true,
      showCancelButton: true
    }).then( resp => {

        if ( resp.value ) {
         this.cervezas.splice(i,1);
         this.cervezaService.borrarCerveza( this.cerveza.id ).subscribe();
        }

      });

  }
}
