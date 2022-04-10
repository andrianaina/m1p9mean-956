import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PlatComponent } from './plat/plat.component';
import { ListPlatComponent } from './list-plat/list-plat.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { PaginationComponent } from './pagination/pagination.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';
import { PlatFormComponent } from './plat-form/plat-form.component';
import { RestaurantFormComponent } from './restaurant-form/restaurant-form.component';
import { AdminComponent } from './admin/admin.component';
import { LivreurComponent } from './livreur/livreur.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { PlatTableComponent } from './plat-table/plat-table.component';
import { UserInsertComponent } from './user-insert/user-insert.component';
import { UserTableComponent } from './user-table/user-table.component';
import { CommandeTableComponent } from './commande-table/commande-table.component';
import { CommandeRestaurantTableComponent } from './commande-restaurant-table/commande-restaurant-table.component';
import { CommandeLivreurComponent } from './commande-livreur/commande-livreur.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PlatComponent,
    ListPlatComponent,
    NavbarComponent,
    MenuComponent,
    PaginationComponent,
    CartComponent,
    PlatFormComponent,
    RestaurantFormComponent,
    AdminComponent,
    LivreurComponent,
    RestaurantComponent,
    PlatTableComponent,
    UserInsertComponent,
    UserTableComponent,
    CommandeTableComponent,
    CommandeRestaurantTableComponent,
    CommandeLivreurComponent,
    AdminSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
