import { Injectable } from '@angular/core';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  totalAmount: any = 0;
  nb: any = 0;
  constructor(private main: AppComponent) {
    if (!localStorage.getItem('Cart') || localStorage.getItem('Cart') == null) {
      console.log('localStorage not initialized');
      localStorage.setItem('Cart', '[]')
    }
    this.main.cart = JSON.parse(localStorage.getItem('Cart') + '')
  }
  getTotal = () => {
    this.totalAmount = 0;
    this.nb = 0;
    for (let i in this.main.cart) {
      this.totalAmount = this.totalAmount + this.main.cart[i].nb * this.main.cart[i].prix;

      this.nb = i;
    }
    localStorage.setItem('Cart', JSON.stringify(this.main.cart));
    return this.totalAmount;
  }
  addItem = (product: any) => {
    let productExist = false;
    for (let i in this.main.cart) {
      if (this.main.cart[i].id === product._id) {
        this.main.cart[i].nb++;
        productExist = true;
        this.getTotal();
        break;
      }
    }
    if (!productExist) {
      this.main.cart.push({
        id: product._id,
        name: product.name,
        prix: product.prix,
        idrestaurant: product.idrestaurant,
        nb: 1
      });
    }
  }
  getCart() {
    return this.main.cart;
  }
  getItemCount() {
    return this.nb;
  }
  getAmount() {
    return this.nb;
  }
  removeItem = (product: any) => {
    this.main.cart = this.main.cart.filter((item: any) => item._id !== product._id);
    this.getTotal();
  }
  decrementItem = (id: any) => {
    for (let i in this.main.cart) {
      if (this.main.cart[i].id === id) {
        this.main.cart[i].nb--;
      }
      if (this.main.cart[i].nb === 0) {
        this.removeItem(this.main.cart[i]);
      }
    }
    this.getTotal();
  }
  incrementItem = (id: any) => {
    for (let i in this.main.cart) {
      if (this.main.cart[i].id === id) {
        this.main.cart[i].nb++;
      }
    }
    this.getTotal();
  }
  removeAll() {
    this.main.cart = [];
    this.getTotal();
  }
}
