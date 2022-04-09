import { Component, OnInit } from '@angular/core';
import { OtherService } from '../services/other.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  listrestaurant:any[];
  listplat:any[];
  constructor(private service:OtherService) { this.listrestaurant=[];this.listplat=[]}

  async ngOnInit() {
    this.listrestaurant = await this.service.findAllRestaurant();
    this.listplat=await this.service.getPlat(localStorage.getItem('userId'));
    // this.listrestaurant = await this.service.findPlatByRestaurant(localStorage.getItem('userId'));
  }

}
