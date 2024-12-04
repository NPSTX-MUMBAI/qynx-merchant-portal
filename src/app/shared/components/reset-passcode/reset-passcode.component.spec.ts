import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasscodeComponent } from './reset-passcode.component';

describe('ResetPasscodeComponent', () => {
  let component: ResetPasscodeComponent;
  let fixture: ComponentFixture<ResetPasscodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResetPasscodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetPasscodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
