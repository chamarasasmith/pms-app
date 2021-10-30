import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-purchase-order-table1',
  templateUrl: './purchase-order-table1.component.html',
  styleUrls: ['./purchase-order-table1.component.css']
})
export class PurchaseOrderTable1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function() {
      $('#example').DataTable();
  });
  }

}
