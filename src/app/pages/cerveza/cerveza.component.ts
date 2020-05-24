import { Component, OnInit, ɵConsole } from '@angular/core';
import { CervezaModel } from 'src/app/models/Cerveza.models';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CervezaService } from 'src/app/services/cerveza.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cerveza',
  templateUrl: './cerveza.component.html',
  styleUrls: ['./cerveza.component.scss']
})
export class CervezaComponent implements OnInit {

  cerveza=new CervezaModel()
  constructor(private cervezaService:CervezaService,private route:ActivatedRoute ) { }

  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id');

    if ( id !== 'nuevo' ) {

      this.cervezaService.getCerveza( id )
        .subscribe( (resp: CervezaModel) => {
          this.cerveza = resp;
          this.cerveza.id = id;
        });

    }

  
  }
  guardar(form:NgForm){

  
    if ( form.invalid ) {
      console.log('Formulario no válido');
      return;
    }

    Swal.fire({
      title: 'Espere',
      text: 'Guardando información',
      allowOutsideClick: false

    });
    Swal.showLoading();


    let peticion: Observable<any>;

    if ( this.cerveza.id ) {
      peticion = this.cervezaService.actualizarCerveza( this.cerveza );
    } else {
      peticion = this.cervezaService.crearCerveza( this.cerveza );
    }

    peticion.subscribe( resp => {

      Swal.fire({
        title: this.cerveza.nombre,
        text: 'Se actualizó correctamente',
     
      });

    });
  }  
    
}

