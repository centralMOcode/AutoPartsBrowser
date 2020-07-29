import { Injectable } from '@angular/core';
import { Part } from '../models/part.model';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
export class ShoppingCartService {
    partsChanged = new Subject<Part[]>();

    parts: Part[] = [
        new Part(1, "Camaro", 2000, 20, "Brake Pads", "OEM", 100)
    ];

    constructor(private http:HttpClient){

    }

    getAll(): Observable<any> {
        return this.http.get('//localhost:8080/cart/all');
    }

    addCartPart(part: Part) {
        return this.http.post('//localhost:8080/cart/add', part).subscribe(data => {
            console.log(data);
        });
    }

    deleteCartPart(index: string) {
        console.log("delete");
        const url = `http://localhost:8080/cart/delete/${index}`;
        return this.http.delete(url).subscribe(data => {
          console.log(data);
        });
    }
}