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

  constructor(private loginService:SignService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(f:NgForm){
    this.loginService.login(f.value).subscribe(
      (data)=>{
        alert('success');
        console.log(data);
        localStorage.setItem('userId',data.idUser);
        localStorage.setItem('token',data.token);
        localStorage.setItem('role',data.role);
        
        var location='plat';
        switch(data.role){
          case 'admin':
            location='ekaly/admin';
          break;
          case 'client':
            location='plat';
          break;
          default:
            location='plat';
        }
        this.router.navigateByUrl(location);
      },
      (err)=>{
        alert(err.error);
      }
    );
  }
}
