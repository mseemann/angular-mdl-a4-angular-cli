import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MdlModule } from '@angular-mdl/core';
//import { MdlSelectModule } from '@angular-mdl/select';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdlModule,
    //MdlSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
