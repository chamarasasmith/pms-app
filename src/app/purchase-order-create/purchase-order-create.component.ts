import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../services/supplier.service';

@Component({
  selector: 'app-purchase-order-create',
  templateUrl: './purchase-order-create.component.html',
  styleUrls: ['./purchase-order-create.component.css']
})
export class PurchaseOrderCreateComponent implements OnInit {

  suppliers:any[]=[];

  constructor(private supplierService:SupplierService) { }

  ngOnInit(): void { 
    this.supplierService.getAllSuppliers().subscribe((data)=>{
      console.log(data);
      this.suppliers=data;
    },(error)=>{
      console.log(error);
    });
  }

}
