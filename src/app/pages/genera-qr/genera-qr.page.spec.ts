import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

import { GeneraQRPage } from './genera-qr.page';

describe('GeneraQRPage', () => {
  let component: GeneraQRPage;
  let fixture: ComponentFixture<GeneraQRPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GeneraQRPage],
      imports: [IonicModule.forRoot(), HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(GeneraQRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a button', () => {
    const compiled = fixture.nativeElement;
    const buttonElement = compiled.querySelector('ion-button'); 

    expect(buttonElement).toBeTruthy();
  });
});