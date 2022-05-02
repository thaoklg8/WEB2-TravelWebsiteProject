import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninEmailPageComponent } from './signin-email-page.component';

describe('SigninEmailPageComponent', () => {
  let component: SigninEmailPageComponent;
  let fixture: ComponentFixture<SigninEmailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninEmailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninEmailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
