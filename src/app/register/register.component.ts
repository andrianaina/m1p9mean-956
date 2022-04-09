import { SignService } from './../services/sign.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  role: any[];
  constructor(private InscrService: SignService, private router: Router) {
    this.role = ['client', 'admin'];
  }
  ngOnInit(): void {
  }
  onSubmit(f: NgForm) {
    f.value.address = 'none';
    f.value.role = 'client';
    f.value.tel = 'none';
    this.InscrService.register(f.value).subscribe(
      (data) => {
        alert('success');
        this.router.navigateByUrl('login');
      },
      (err) => {
        alert(err.error);
      }
    );
  }
}
