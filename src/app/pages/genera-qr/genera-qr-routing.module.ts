import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneraQRPage } from './genera-qr.page';

const routes: Routes = [
  {
    path: '',
    component: GeneraQRPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneraQRPageRoutingModule {}
