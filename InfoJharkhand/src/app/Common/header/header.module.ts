import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  exports: [HeaderComponent],
  bootstrap: [HeaderComponent]
})
export class HeaderModule { }
