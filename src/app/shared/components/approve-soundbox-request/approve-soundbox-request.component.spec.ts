import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveSoundboxRequestComponent } from './approve-soundbox-request.component';

describe('ApproveSoundboxRequestComponent', () => {
  let component: ApproveSoundboxRequestComponent;
  let fixture: ComponentFixture<ApproveSoundboxRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApproveSoundboxRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApproveSoundboxRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
