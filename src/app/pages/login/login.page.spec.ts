import { ComponentFixture, TestBed, async, waitForAsync } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { Storage } from '@ionic/storage-angular';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations:[LoginPage],
      providers: [Storage],
      
    }).compileComponents();
    
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
