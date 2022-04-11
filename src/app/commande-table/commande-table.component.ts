import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SignService } from '../services/sign.service';

import { OtherService } from './../services/other.service';
@Component({
  selector: 'app-commande-table',
  templateUrl: './commande-table.component.html',
  styleUrls: ['./commande-table.component.css']
})
export class CommandeTableComponent implements OnInit {
  list: any = [];
  listlivreur: any = [];
  constructor(private service: OtherService, private signservice: SignService,private router: Router) { }

  async ngOnInit() {
    if (!localStorage.getItem('userId') || !localStorage.getItem('role')) {
      localStorage.clear();
      alert('Authentification required');
      this.router.navigateByUrl('login');
    }
    this.list = await this.service.findCommandeNonLivre();
    this.listlivreur = await this.signservice.findByRole('livreur');

  }
  onSubmit(idcommande: any, r: NgForm) {
    r.value.id = idcommande
    this.service.updateLivreur(r.value).subscribe();
  }
}
