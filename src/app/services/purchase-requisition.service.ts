import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PurchaseRequisitionService {
  private baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) {}

  getAllRequisitions(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + '');
  }
}
