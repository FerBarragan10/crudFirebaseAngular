import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { CervezaModel } from '../models/Cerveza.models';
import{map,delay} from 'rxjs/operators';
import swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class CervezaService {

  constructor(private http:HttpClient) { }

  url='https://crud-cervezas.firebaseio.com';
  crearCerveza(cerveza:CervezaModel){
    console.log(cerveza);
    return this.http.post(`${this.url}/cervezas.json`,cerveza).pipe(
      map((resp:any)=>{
        cerveza.id=resp.name;
        return cerveza;
      }
      )
    )
  }


  obtenerCervezas(){
    return this.http.get(`${this.url}/cervezas.json`).pipe(
      map(this.crearArreglo),
      delay(1500)
    );
  }

  private crearArreglo(cervezasObj:object){
    const cervezas:CervezaModel[]=[];
    if(cervezasObj==null){
      return [];
    }
    Object.keys(cervezasObj).forEach(key=>{
      const cerveza:CervezaModel=cervezasObj[key];
      cerveza.id=key;
      cervezas.push(cerveza);
    })
    return cervezas;
  }


  actualizarCerveza(cerveza:CervezaModel){
    const cervezaTemp={
      ...cerveza
    };
    delete cervezaTemp.id;
    return this.http.put(`${this.url}/cervezas/${cerveza.id}.json`,cervezaTemp); 

  }

  getCerveza(id:string){
    return this.http.get(`${this.url}/cervezas/${id}.json`);
  }
  borrarCerveza( id: string ) {

    return this.http.delete(`${ this.url }/cervezas/${ id }.json`);

  }
}
