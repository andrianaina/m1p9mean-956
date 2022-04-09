import { Component, OnInit } from '@angular/core';

import { OtherService } from './../services/other.service';
@Component({
  selector: 'app-commande-table',
  templateUrl: './commande-table.component.html',
  styleUrls: ['./commande-table.component.css']
})
export class CommandeTableComponent implements OnInit {
  list: any = [];
  constructor(private service: OtherService) { }

  async ngOnInit() {
    this.list = await this.service.findCommandeNonLivre();
  }

}
