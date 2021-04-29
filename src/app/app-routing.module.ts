import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'promises-demo', loadChildren: () => import('./promises-demo/promises-demo.module').then(m => m.PromisesDemoModule) },
  { path: 'sharing-demo', loadChildren: () => import('./sharing-demo/sharing-demo.module').then(m => m.SharingDemoModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
