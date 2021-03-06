import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent}from './pages/home/home.component';
import{CervezaComponent} from './pages/cerveza/cerveza.component';
import{ViewCervezaComponent} from'./pages/view-cerveza/view-cerveza.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'cerveza/:id',component:CervezaComponent},
  {path:'infoCerveza/:id',component:ViewCervezaComponent},
  {path:'**',pathMatch:'full',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
