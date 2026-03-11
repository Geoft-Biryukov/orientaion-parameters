import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EulerAnglesForm } from './euler-angles-form';

describe('EulerAnglesForm', () => {
  let component: EulerAnglesForm;
  let fixture: ComponentFixture<EulerAnglesForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EulerAnglesForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EulerAnglesForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
