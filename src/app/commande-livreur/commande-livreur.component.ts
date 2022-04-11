import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OtherService } from './../services/other.service';
@Component({
  selector: 'app-commande-livreur',
  templateUrl: './commande-livreur.component.html',
  styleUrls: ['./commande-livreur.component.css']
})

export class CommandeLivreurComponent implements OnInit {
  list: any = [];
  constructor(private service: OtherService,private router: Router) { }

  async ngOnInit() {
    if (!localStorage.getItem('userId') || !localStorage.getItem('role')) {
      localStorage.clear();
      alert('Authentification required');
      this.router.navigateByUrl('login');
    }
    this.list = await this.service.findCommandelivreur(localStorage.getItem('userId'));
  }
  livrer(id: any) {
    alert('haha');
    this.service.livrer(id).subscribe();
  }
}
