import { Component, OnInit } from "@angular/core";
import { PizzaOrderService } from "../pizza-order.service";

@Component({
  selector: "app-pizza-orders",
  templateUrl: "./pizza-orders.component.html",
  styleUrls: ["./pizza-orders.component.css"]
})
export class PizzaOrdersComponent implements OnInit {
  pizzaOrders: any[];
  constructor(private PizzaOrderService: PizzaOrderService) {}

  ngOnInit() {
    this.getPizzaOrder();
  }

  getPizzaOrder() {
    this.PizzaOrderService.getPizzaOrders().subscribe((response: any[]) => {
      this.pizzaOrders = response;
    });
  }
}
