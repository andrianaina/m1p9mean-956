import { CartService } from './../services/cart.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-plat',
  templateUrl: './plat.component.html',
  styleUrls: ['./plat.component.css']
})
export class PlatComponent implements OnInit {

  @Input() plat:any;
  constructor(private service:CartService) { }

  ngOnInit(): void {
    
  }
  addToCart(){
    this.service.addItem(this.plat);
    window.location.reload();
  }
}
