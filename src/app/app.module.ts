import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CervezaComponent } from './pages/cerveza/cerveza.component';
import {FormsModule} from'@angular/forms';
import { ViewCervezaComponent } from './pages/view-cerveza/view-cerveza.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CervezaComponent,
    ViewCervezaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
