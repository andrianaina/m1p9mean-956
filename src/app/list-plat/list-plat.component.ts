import { OtherService } from './../services/other.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-plat',
  templateUrl: './list-plat.component.html',
  styleUrls: ['./list-plat.component.css']
})
export class ListPlatComponent implements OnInit {
  listplat: any[];
  listrestaurant: any[];
  constructor(private service: OtherService, private router: Router, private route: ActivatedRoute) { this.listplat = []; this.listrestaurant = []; }

  async ngOnInit() {
    const id = this.route.snapshot.params['id'];

    this.listrestaurant = await this.service.findAllRestaurant();
    if (!id || id === "") {
      if (this.listrestaurant.length > 0) {
        console.log(this.listrestaurant[0]);
        this.router.navigateByUrl('/plat/' + this.listrestaurant[0]._id);
      }
    }
    else {
      this.listplat = await this.service.getPlat(id);
    }
  }
}
