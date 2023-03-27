import { ComponentFixture, TestBed } from '@angular/core/testing';

import { City7Component } from './city7.component';

describe('City7Component', () => {
  let component: City7Component;
  let fixture: ComponentFixture<City7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ City7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(City7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
