import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeroComponent } from './components/primero/primero.component';
import { DosComponent } from './components/dos/dos.component';
import { TresComponent } from './components/tres/tres.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeroComponent,
    DosComponent,
    TresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
