import { Component, OnInit } from '@angular/core';

import { OtherService } from './../services/other.service';
@Component({
  selector: 'app-commande-restaurant-table',
  templateUrl: './commande-restaurant-table.component.html',
  styleUrls: ['./commande-restaurant-table.component.css']
})

export class CommandeRestaurantTableComponent implements OnInit {
  list: any = [];
  constructor(private service: OtherService) { }

  async ngOnInit() {
    this.list = await this.service.findCommandeRestaurantNow(localStorage.getItem('userId'));
  }
  onSubmit(id: any) {
    this.service.updatelivrablePlat(id).subscribe((err) => {
      if (err) console.log(err)
    });
  }
}
