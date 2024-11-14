import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundboxDetailsComponent } from './soundbox-details.component';

describe('SoundboxDetailsComponent', () => {
  let component: SoundboxDetailsComponent;
  let fixture: ComponentFixture<SoundboxDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SoundboxDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoundboxDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
