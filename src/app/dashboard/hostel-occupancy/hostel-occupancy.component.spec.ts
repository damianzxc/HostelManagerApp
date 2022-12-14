import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelOccupancyComponent } from './hostel-occupancy.component';

describe('HostelOccupancyComponent', () => {
  let component: HostelOccupancyComponent;
  let fixture: ComponentFixture<HostelOccupancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostelOccupancyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostelOccupancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
