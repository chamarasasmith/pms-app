import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IRequisition } from '../interfaces/irequisition';

@Injectable({
  providedIn: 'root',
})
export class PurchaseRequisitionService {
  private baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) {}

  getAllRequisitions(): Observable<IRequisition[]> {
    return this.httpClient.get<IRequisition[]>(
      this.baseUrl + '/api/Requisition'
    );
  }
}
