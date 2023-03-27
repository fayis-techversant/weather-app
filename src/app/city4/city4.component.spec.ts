import { ComponentFixture, TestBed } from '@angular/core/testing';

import { City4Component } from './city4.component';

describe('City4Component', () => {
  let component: City4Component;
  let fixture: ComponentFixture<City4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ City4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(City4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
