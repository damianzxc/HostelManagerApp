import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingRentalComponent } from './upcoming-rental.component';

describe('UpcomingRentalComponent', () => {
  let component: UpcomingRentalComponent;
  let fixture: ComponentFixture<UpcomingRentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingRentalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
