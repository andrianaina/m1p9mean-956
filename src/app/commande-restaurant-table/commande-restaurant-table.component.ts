import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { OtherService } from './../services/other.service';
@Component({
  selector: 'app-commande-restaurant-table',
  templateUrl: './commande-restaurant-table.component.html',
  styleUrls: ['./commande-restaurant-table.component.css']
})

export class CommandeRestaurantTableComponent implements OnInit {
  list: any = [];
  constructor(private service: OtherService,private router: Router) { }

  async ngOnInit() {
    if (!localStorage.getItem('userId') || !localStorage.getItem('role')) {
      localStorage.clear();
      alert('Authentification required');
      this.router.navigateByUrl('login');
    }
    this.list = await this.service.findCommandeRestaurantNow(localStorage.getItem('userId'));
  }
  onSubmit(id: any) {
    this.service.updatelivrablePlat(id).subscribe((err) => {
      if (err) console.log(err)
    });
  }
}
