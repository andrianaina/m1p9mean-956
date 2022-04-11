import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SignService } from '../services/sign.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  section = 'client';
  list: any = [];
  constructor(private service: SignService, private route: ActivatedRoute, private router: Router) { }

  async ngOnInit() {
    if (!localStorage.getItem('userId') || !localStorage.getItem('role')) {
      localStorage.clear();
      alert('Authentification required');
      this.router.navigateByUrl('login');
    }
    this.section = this.route.snapshot.params['section'];
    if (this.section != "admin" && this.section != "restaurant" && this.section != "livreur") {
      this.router.navigateByUrl('admin/admin');
    }

    this.list = await this.service.findByRole(this.section);
  }
}
