import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { PizzaOrdersComponent } from "./pizza-orders/pizza-orders.component";
import { OrderDetailsComponent } from "./order-details/order-details.component";

const routes: Routes = [
  { path: "", component: PizzaOrdersComponent },
  { path: "order-details/:id", component: OrderDetailsComponent }, 
  { path: "**", component: AppComponent, pathMatch: "full" }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
