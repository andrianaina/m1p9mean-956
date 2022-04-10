import { Router } from '@angular/router';
import { OtherService } from './../services/other.service';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-plat-form',
  templateUrl: './plat-form.component.html',
  styleUrls: ['./plat-form.component.css']
})
export class PlatFormComponent implements OnInit {
  @Input() listrestaurant!: any[];
  constructor(private service: OtherService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(f: NgForm) {
    f.value.idrestaurant = localStorage.getItem('userId');
    this.service.addNewPlat(f.value).subscribe(
      (data) => {

      }
      , (err) => {
        if (!err) {
          alert('success');
        }
        alert(err.error);
      }
    );
    this.router.navigateByUrl('restaurant/admin');
  }
}
