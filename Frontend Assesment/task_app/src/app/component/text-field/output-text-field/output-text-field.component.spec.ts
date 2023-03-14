import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputTextFieldComponent } from './output-text-field.component';

describe('OutputTextFieldComponent', () => {
  let component: OutputTextFieldComponent;
  let fixture: ComponentFixture<OutputTextFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputTextFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputTextFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
