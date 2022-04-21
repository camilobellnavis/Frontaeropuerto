import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVuelosClienteComponent } from './list-vuelos-cliente.component';

describe('ListVuelosClienteComponent', () => {
  let component: ListVuelosClienteComponent;
  let fixture: ComponentFixture<ListVuelosClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListVuelosClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVuelosClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
