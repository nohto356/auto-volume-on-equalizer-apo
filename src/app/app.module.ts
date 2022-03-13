import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonComponentModule } from './common/component/common-component.module';
import { CommonServiceModule } from './common/service/common-service.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonComponentModule,
    CommonServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
