import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CwsCallTestComponent } from './csw-call-test/csw-call-test.component';
import { CswInvokerService } from './csw-invoker.service';


@NgModule({
  declarations: [
    AppComponent,
    CwsCallTestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CswInvokerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
