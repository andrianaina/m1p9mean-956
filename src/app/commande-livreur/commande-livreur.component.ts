import { Component, OnInit } from '@angular/core';
import { OtherService } from './../services/other.service';
@Component({
  selector: 'app-commande-livreur',
  templateUrl: './commande-livreur.component.html',
  styleUrls: ['./commande-livreur.component.css']
})

export class CommandeLivreurComponent implements OnInit {
  list: any = [];
  constructor(private service: OtherService) { }

  async ngOnInit() {
    this.list = await this.service.findCommandelivreur(localStorage.getItem('userid'));
  }

}
