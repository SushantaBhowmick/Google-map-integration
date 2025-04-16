import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolygonInfoWindowComponent } from './polygon-info-window.component';

describe('PolygonInfoWindowComponent', () => {
  let component: PolygonInfoWindowComponent;
  let fixture: ComponentFixture<PolygonInfoWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolygonInfoWindowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolygonInfoWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
