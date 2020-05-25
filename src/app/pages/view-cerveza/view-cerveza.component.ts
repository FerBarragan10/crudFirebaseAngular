import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CervezaService } from 'src/app/services/cerveza.service';
import { CervezaModel } from 'src/app/models/Cerveza.models';
@Component({
  selector: 'app-view-cerveza',
  templateUrl: './view-cerveza.component.html',
  styleUrls: ['./view-cerveza.component.scss']
})
export class ViewCervezaComponent implements OnInit {
  cerveza=new CervezaModel()
  constructor(private route:ActivatedRoute,private cervezaService:CervezaService) { }

  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);

      this.cervezaService.getCerveza( id )
        .subscribe( (resp: CervezaModel) => {
          this.cerveza = resp;
          console.log(this.cerveza);
          //this.cerveza.id = id;
        });

    }

  
  }
  

