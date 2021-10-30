import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseOrderTable1Component } from './purchase-order-table1.component';

describe('PurchaseOrderTable1Component', () => {
  let component: PurchaseOrderTable1Component;
  let fixture: ComponentFixture<PurchaseOrderTable1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseOrderTable1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseOrderTable1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
