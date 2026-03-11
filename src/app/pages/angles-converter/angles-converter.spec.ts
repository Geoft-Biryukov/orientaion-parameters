import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnglesConverter } from './angles-converter';

describe('AnglesConverter', () => {
  let component: AnglesConverter;
  let fixture: ComponentFixture<AnglesConverter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnglesConverter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnglesConverter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
