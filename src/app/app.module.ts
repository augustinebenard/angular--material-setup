import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { ExtrasComponent } from './components/extras/extras.component';
import { materials } from './angular-material/material-modules';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ExtrasComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...materials,
    BrowserAnimationsModule
  ],
  exports:[
    ...materials
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
