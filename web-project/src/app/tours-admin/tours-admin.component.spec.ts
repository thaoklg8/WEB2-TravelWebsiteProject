import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToursAdminComponent } from './tours-admin.component';

describe('ToursAdminComponent', () => {
  let component: ToursAdminComponent;
  let fixture: ComponentFixture<ToursAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToursAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToursAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
