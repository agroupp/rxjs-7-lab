import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AnimationDemoComponent } from './animation-demo.component';
import { ScaleComponent } from './scale/scale.component';

const routes: Routes = [
  { path: '', component: AnimationDemoComponent }
];

@NgModule({
  declarations: [
    AnimationDemoComponent,
    ScaleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AnimationDemoModule { }
