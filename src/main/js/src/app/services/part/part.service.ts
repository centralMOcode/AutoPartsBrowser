import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Part } from '../../models/part.model';

@Injectable({
  providedIn: 'root'
})
export class PartService {
  //private parts: Part[];

  constructor(private http:HttpClient) {

  }

  getAll(): Observable<any> {
    return this.http.get('//localhost:8080/parts/all');
  }

  getAllModels(): Observable<any> {
    return this.http.get('//localhost:8080/parts/models/all');
  }

  getPartsByModelId(index: number): Observable<Part[]> {
    return this.http.get<Part[]>(`//localhost:8080/parts/${index}`);
  }

  deletePart(index: string) {
    console.log("delete");
    const url = `http://localhost:8080/parts/delete/${index}`;
    return this.http.delete(url).subscribe(data => {
      console.log(data);
    });
  }
}
