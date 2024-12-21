import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
    {path: '', component: NewsComponent}
];

@NgModule({
  declarations: [
    NewsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  exports: [NewsComponent],
  bootstrap: [NewsComponent]
})
export class NewsModule { }
