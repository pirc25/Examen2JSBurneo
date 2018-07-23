import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionProductoComponent } from './descripcionProducto.component';

describe('DescripcionProductoComponent', () => {
  let component: DescripcionProductoComponent;
  let fixture: ComponentFixture<DescripcionProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescripcionProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescripcionProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
