import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FingerFrontComponent } from './finger-front.component';

describe('FingerFrontComponent', () => {
  let component: FingerFrontComponent;
  let fixture: ComponentFixture<FingerFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FingerFrontComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FingerFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
