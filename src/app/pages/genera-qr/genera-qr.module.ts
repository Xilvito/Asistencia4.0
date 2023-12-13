import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeneraQRPageRoutingModule } from './genera-qr-routing.module';

import { GeneraQRPage } from './genera-qr.page';
import { QRCodeModule } from 'angularx-qrcode';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeneraQRPageRoutingModule, QRCodeModule
  ],
  declarations: [GeneraQRPage]
})
export class GeneraQRPageModule {

  
}
