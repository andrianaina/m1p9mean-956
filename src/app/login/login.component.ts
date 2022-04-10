import { SignService } from './../services/sign.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: SignService, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem("userId") && localStorage.getItem("role")) {
      var location = 'plat';
      switch (localStorage.getItem('role')) {
        case 'admin':
          location = 'admin/commande';
          break;
        case 'livreur':
          location = 'livreur';
          break;
        case 'admin':
          location = 'restaurant/benefits';
          break;
        case 'client':
          location = 'plat';
          break;
      }
      this.router.navigateByUrl(location);
    }
  }

  onSubmit(f: NgForm) {
    this.loginService.login(f.value).subscribe(
      (data) => {
        alert('success');
        console.log(data);
        localStorage.setItem('userId', data.idUser);
        localStorage.setItem('token', data.token);
        localStorage.setItem('role', data.role);
      },
      (err) => {
        alert(err.error);
      }
    );
    window.location.reload();
  }
}
