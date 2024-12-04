import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllVpaComponent } from './all-vpa.component';

describe('AllVpaComponent', () => {
  let component: AllVpaComponent;
  let fixture: ComponentFixture<AllVpaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllVpaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllVpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
