import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  private baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) {

   }


   getAllSuppliers():Observable<any[]>{
    return this.httpClient.get<any[]>(this.baseUrl+"/api/supplier");
   }

}
 

