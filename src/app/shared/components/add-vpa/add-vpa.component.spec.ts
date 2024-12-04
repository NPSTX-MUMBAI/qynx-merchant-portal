import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVpaComponent } from './add-vpa.component';

describe('AddVpaComponent', () => {
  let component: AddVpaComponent;
  let fixture: ComponentFixture<AddVpaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddVpaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
