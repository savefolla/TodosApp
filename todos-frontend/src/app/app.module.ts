import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import {MatButtonModule, MatCheckboxModule, MatExpansionModule, MatSidenavModule, MatInputModule} from "@angular/material";

import {HttpClientModule} from "@angular/common/http";
import {AppService} from "./app.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : []
  ],
  entryComponents: [],
  providers: [AppService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
