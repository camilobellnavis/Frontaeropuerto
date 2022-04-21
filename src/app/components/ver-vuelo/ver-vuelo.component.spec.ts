import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerVueloComponent } from './ver-vuelo.component';

describe('VerVueloComponent', () => {
  let component: VerVueloComponent;
  let fixture: ComponentFixture<VerVueloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerVueloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerVueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
