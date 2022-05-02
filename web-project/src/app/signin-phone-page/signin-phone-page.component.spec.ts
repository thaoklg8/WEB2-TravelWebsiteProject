import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninPhonePageComponent } from './signin-phone-page.component';

describe('SigninPhonePageComponent', () => {
  let component: SigninPhonePageComponent;
  let fixture: ComponentFixture<SigninPhonePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninPhonePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninPhonePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
