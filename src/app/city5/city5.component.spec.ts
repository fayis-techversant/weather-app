import { ComponentFixture, TestBed } from '@angular/core/testing';

import { City5Component } from './city5.component';

describe('City5Component', () => {
  let component: City5Component;
  let fixture: ComponentFixture<City5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ City5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(City5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
