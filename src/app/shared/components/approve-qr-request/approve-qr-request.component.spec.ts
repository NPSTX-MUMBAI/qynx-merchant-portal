import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveQRRequestComponent } from './approve-qr-request.component';

describe('ApproveQRRequestComponent', () => {
  let component: ApproveQRRequestComponent;
  let fixture: ComponentFixture<ApproveQRRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApproveQRRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApproveQRRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
