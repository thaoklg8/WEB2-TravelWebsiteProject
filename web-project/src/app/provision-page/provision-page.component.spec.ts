import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvisionPageComponent } from './provision-page.component';

describe('ProvisionPageComponent', () => {
  let component: ProvisionPageComponent;
  let fixture: ComponentFixture<ProvisionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvisionPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvisionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
