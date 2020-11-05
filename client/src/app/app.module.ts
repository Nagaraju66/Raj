import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { PizzaOrdersComponent } from "./pizza-orders/pizza-orders.component";
import { AppRoutingModule } from "./app-routing.module";
import { PizzaOrderService } from "./pizza-order.service";
import { OrderDetailsComponent } from './order-details/order-details.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent, PizzaOrdersComponent, OrderDetailsComponent],
  bootstrap: [AppComponent],
  providers: [PizzaOrderService]
})
export class AppModule {}
