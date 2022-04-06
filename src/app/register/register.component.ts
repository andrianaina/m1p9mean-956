import { SignService } from './../services/sign.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  role:any[];
  constructor(private InscrService : SignService) {
    this.role=['client','admin','livreur','restaurant'];
  }

  ngOnInit(): void {
  }
  onSubmit(f:NgForm){
    this.InscrService.register(f.value).subscribe(
      (data)=>{
        console.log(data);
      },
      (err)=>{
        console.log("Error "+err);
      }
    );
  }
}
