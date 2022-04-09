import { RestaurantComponent } from './restaurant/restaurant.component';
import { ListPlatComponent } from './list-plat/list-plat.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { AdminComponent } from './admin/admin.component';
import { CommandeTableComponent } from './commande-table/commande-table.component';
import { CommandeLivreurComponent } from './commande-livreur/commande-livreur.component';
import { CommandeRestaurantTableComponent } from './commande-restaurant-table/commande-restaurant-table.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'plat', component: ListPlatComponent },
  { path: 'plat/:id', component: ListPlatComponent },
  { path: 'restaurant/admin', component: RestaurantComponent },
  { path: 'restaurant/benefits', component: CommandeRestaurantTableComponent },
  { path: 'client/cart', component: CartComponent },
  { path: 'admin/commande', component: CommandeTableComponent },
  { path: 'admin/:section', component: AdminComponent },
  { path: 'livreur', component: CommandeLivreurComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
