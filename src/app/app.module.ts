import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ViewtaskComponent } from './viewtask/viewtask.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { FormsModule } from '@angular/forms';
import { UpdateboxComponent } from './updatebox/updatebox.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ViewtaskComponent,
    AddtaskComponent,
    UpdateboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
