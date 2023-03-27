import { ComponentFixture, TestBed } from '@angular/core/testing';

import { City8Component } from './city8.component';

describe('City8Component', () => {
  let component: City8Component;
  let fixture: ComponentFixture<City8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ City8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(City8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
