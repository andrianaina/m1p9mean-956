import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OtherService } from '../services/other.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  listrestaurant:any[];
  listplat:any[];
  constructor(private service:OtherService,private router: Router) { this.listrestaurant=[];this.listplat=[]}

  async ngOnInit() {
    if (!localStorage.getItem('userId') || !localStorage.getItem('role')) {
      localStorage.clear();
      alert('Authentification required');
      this.router.navigateByUrl('login');
    }
    this.listrestaurant = await this.service.findAllRestaurant();
    this.listplat=await this.service.getPlat(localStorage.getItem('userId'));
    // this.listrestaurant = await this.service.findPlatByRestaurant(localStorage.getItem('userId'));
  }

}
