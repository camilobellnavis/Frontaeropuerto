import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVuelosComponent } from './list-vuelos.component';

describe('ListVuelosComponent', () => {
  let component: ListVuelosComponent;
  let fixture: ComponentFixture<ListVuelosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListVuelosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVuelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
