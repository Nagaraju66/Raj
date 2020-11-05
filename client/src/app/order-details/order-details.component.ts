import { Component, OnInit, AfterContentChecked } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { PizzaOrderService } from "../pizza-order.service";

@Component({
  selector: "app-order-details",
  templateUrl: "./order-details.component.html",
  styleUrls: ["./order-details.component.css"]
})
export class OrderDetailsComponent implements OnInit, AfterContentChecked {
  orderId: any;
  pizzaOrders: any;
  orderDetail: any;
  constructor(
    private route: ActivatedRoute,
    private PizzaOrderService: PizzaOrderService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.orderId = params.get("id");
    });
    this.getPizzaOrder();
  }

  getPizzaOrder() {
    this.PizzaOrderService.getPizzaOrders().subscribe((response: any[]) => {
      this.pizzaOrders = response;
    });
  }

  ngAfterContentChecked() {
    if (this.pizzaOrders) {
      this.orderDetail = this.pizzaOrders.filter(resp => {
        return resp.id == this.orderId;
      });
    }
  }
}
