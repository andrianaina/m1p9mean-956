import { Component, OnInit } from '@angular/core';
import { error } from 'protractor';
import { OtherService } from '../services/other.service';
import { CartService } from './../services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: any = [];
  total = 0;
  constructor(private service: CartService, private commandeService: OtherService) { }

  ngOnInit(): void {
    this.cart = this.service.getCart();
    this.total = this.service.getTotal();
  }
  plus(id: any) {
    this.service.incrementItem(id);
    window.location.reload();
  }
  minus(id: any) {
    this.service.decrementItem(id);
    window.location.reload();
  }
  commander(r: any) {
    r.value.idclient = localStorage.getItem('userId');
    r.value.panier = this.cart;
    var res = JSON.parse(JSON.stringify(r.value));
    this.commandeService.commander(res).subscribe((data) => {
      // alert(data.status);
    }, (error) => {
      // console.log(error)
    });
    this.service.removeAll();
    window.location.reload();
  }
}
