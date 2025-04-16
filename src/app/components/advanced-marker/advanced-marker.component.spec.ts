import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedMarkerComponent } from './advanced-marker.component';

describe('AdvancedMarkerComponent', () => {
  let component: AdvancedMarkerComponent;
  let fixture: ComponentFixture<AdvancedMarkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvancedMarkerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvancedMarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
