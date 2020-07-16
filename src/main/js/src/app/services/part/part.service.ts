import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartService {

  constructor(private http:HttpClient) {

  }

  getAll(): Observable<any> {
    return this.http.get('//localhost:8080/parts/all');
  }

  getAllModels(): Observable<any> {
    return this.http.get('//localhost:8080/parts/models/all');
  }
}
