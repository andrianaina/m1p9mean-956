import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ekaly m1p9mean956';
  cart: any = [];
  constructor(private router: Router) { }
  ngOnInit(): void {
    if (!localStorage.getItem('userId') || !localStorage.getItem('role')) {
      localStorage.clear();
      alert('Authentification required');
      this.router.navigateByUrl('login');
    }
    if (!localStorage.getItem('Cart')) {
      console.log('localStorage not initialized');
      localStorage.setItem('Cart', '[]')
    }
    this.cart = JSON.parse(localStorage.getItem("Cart") + '');
  }
}
