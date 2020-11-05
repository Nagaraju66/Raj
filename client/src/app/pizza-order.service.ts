import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, filter } from "rxjs/operators";
@Injectable()
export class PizzaOrderService {
  constructor(private http: HttpClient) {}
  getPizzaOrders() {
    return this.http.get("http://localhost:5555/data");
  }
}
