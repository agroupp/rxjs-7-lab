import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PromisesDemoComponent } from './promises-demo.component';

const routes: Routes = [
  { path: '', component: PromisesDemoComponent }
];

@NgModule({
  declarations: [
    PromisesDemoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PromisesDemoModule { }
