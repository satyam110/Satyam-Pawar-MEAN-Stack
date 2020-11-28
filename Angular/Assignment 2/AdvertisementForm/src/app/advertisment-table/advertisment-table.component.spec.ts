import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertismentTableComponent } from './advertisment-table.component';

describe('AdvertismentTableComponent', () => {
  let component: AdvertismentTableComponent;
  let fixture: ComponentFixture<AdvertismentTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertismentTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertismentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
