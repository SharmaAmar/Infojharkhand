import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';


@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  exports: [FooterComponent],
  bootstrap: [FooterComponent]
})
export class FooterModule { }
