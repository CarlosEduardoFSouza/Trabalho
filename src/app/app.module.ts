import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListRenderComponent } from './componentes/list/list-render.component';
import { TwoWayBidingComponent } from './componentes/create/two-way-biding.component';
import { UpdateComponent } from './componentes/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    ListRenderComponent,
    TwoWayBidingComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
