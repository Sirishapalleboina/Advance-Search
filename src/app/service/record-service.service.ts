import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IItem } from '../modal/item.modal';
@Injectable({
  providedIn: 'root'
})
export class RecordServiceService {

  constructor(private http: HttpClient) { }
  private apiUrl = '/api/records/search'; // Backend API endpoint
  // private apiUrl = ''
  searchRecords(
    startDate?: string, 
    endDate?: string, 
    sortField: string = 'date', 
    sortOrder: string = 'desc'
  ): Observable<any> {
    let params = new HttpParams();
    if (startDate) params = params.set('startDate', startDate);
    if (endDate) params = params.set('endDate', endDate);
    params = params.set('sortField', sortField).set('sortOrder', sortOrder);

    // return this.http.get(this.apiUrl, { params });
    return this.http.get<IItem[]>(this.apiUrl, { params }); 
  }
}
