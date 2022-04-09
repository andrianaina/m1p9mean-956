import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ekaly m1p9mean956';
  cart: any = [];
  ngOnInit(): void {
    if (!localStorage.getItem('Cart')) {
      console.log('localStorage not initialized');
      localStorage.setItem('Cart', '[]')
    }
    this.cart = JSON.parse(localStorage.getItem("Cart") + '');
    console.log(this.cart);
  }
}
