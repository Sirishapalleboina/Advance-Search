import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecordSearchComponent } from './record-search/record-search.component';
import { HttpClientModule } from '@angular/common/http';
import { TableCompo1Component } from './table-compo1/table-compo1.component';
import { TableModule } from '@coreui/angular';

@NgModule({
  declarations: [
    AppComponent,
    RecordSearchComponent,
    TableCompo1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
