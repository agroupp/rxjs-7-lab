import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { SharingDemoComponent } from './sharing-demo.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  { path: '', component: SharingDemoComponent }
];

@NgModule({
  declarations: [
    SharingDemoComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class SharingDemoModule { }
