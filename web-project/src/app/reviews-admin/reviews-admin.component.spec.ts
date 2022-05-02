import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsAdminComponent } from './reviews-admin.component';

describe('ReviewsAdminComponent', () => {
  let component: ReviewsAdminComponent;
  let fixture: ComponentFixture<ReviewsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewsAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
