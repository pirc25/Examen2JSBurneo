import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionTiendaComponent } from './descripcionTienda.component';

describe('DescripcionTiendaComponent', () => {
  let component: DescripcionTiendaComponent;
  let fixture: ComponentFixture<DescripcionTiendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescripcionTiendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescripcionTiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
