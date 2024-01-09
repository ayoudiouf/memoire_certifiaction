import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashPresiPavionComponent } from './dash-presi-pavion.component';

describe('DashPresiPavionComponent', () => {
  let component: DashPresiPavionComponent;
  let fixture: ComponentFixture<DashPresiPavionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashPresiPavionComponent]
    });
    fixture = TestBed.createComponent(DashPresiPavionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
