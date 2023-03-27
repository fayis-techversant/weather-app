import { ComponentFixture, TestBed } from '@angular/core/testing';

import { City6Component } from './city6.component';

describe('City6Component', () => {
  let component: City6Component;
  let fixture: ComponentFixture<City6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ City6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(City6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
