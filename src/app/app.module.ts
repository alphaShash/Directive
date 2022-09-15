import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCOmpComponent } from './new-comp/new-comp.component';
import { FormsModule } from '@angular/forms';
import { MydirectiveDirective } from './mydirective.directive';
import { NsService } from './ns.service';
@NgModule({
  declarations: [
    AppComponent,
    NewCOmpComponent,
    MydirectiveDirective

  ],
  imports: [
  
  BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [NsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
