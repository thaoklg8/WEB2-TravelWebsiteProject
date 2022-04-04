import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourDetailPageComponent } from './tour-detail-page.component';

describe('TourDetailPageComponent', () => {
  let component: TourDetailPageComponent;
  let fixture: ComponentFixture<TourDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
