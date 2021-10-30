import { Component, OnInit } from '@angular/core';
import { IRequisition } from '../interfaces/irequisition';
import { PurchaseRequisitionService } from '../services/purchase-requisition.service';

declare var $: any;

@Component({
  selector: 'app-purchase-order-table1',
  templateUrl: './purchase-order-table1.component.html',
  styleUrls: ['./purchase-order-table1.component.css'],
})
export class PurchaseOrderTable1Component implements OnInit {
  data: IRequisition[] = [];

  constructor(private purchaseRequisitionService: PurchaseRequisitionService) {}

  ngOnInit(): void {
    this.purchaseRequisitionService.getAllRequisitions().subscribe((res) => {
      this.data = res;
      this.SetDataTable();
    });
  }

  SetDataTable() {
    $(document).ready(function () {
      $('#example').DataTable();
    });
  }
}
