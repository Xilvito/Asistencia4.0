import { Injectable } from '@angular/core';
import { BarcodeScanner, BarcodeScannerPlugin } from '@capacitor-community/barcode-scanner';
import { Platform } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class camipService {

    constructor(private platform: Platform) { }

    async iniciarEscaneo(): Promise<string | null> {
        await BarcodeScanner.checkPermission({ force: true });

        if (this.platform.is('mobile')) {
            BarcodeScanner.hideBackground();
            document.body.style.opacity = '0';
            document.body.style.background = 'transparent';
        }

        const result = await BarcodeScanner.startScan();


        if (result.hasContent) {
            const scannedContent = result.content;

            if (this.isValidURL(scannedContent)) {
                window.open(scannedContent, '_blank');
                BarcodeScanner.showBackground();

            } else {
                console.log('Contenido escaneado no es una URL válida:', scannedContent);
            }

            return scannedContent;
        }

        return null;
    }


    private isValidURL(url: string): boolean {
        try {
            const urlObj = new URL(url);
            return urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
        } catch (e) {
            return false;
        }
    }
}