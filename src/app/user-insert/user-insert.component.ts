import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SignService } from '../services/sign.service';

@Component({
  selector: 'app-user-insert',
  templateUrl: './user-insert.component.html',
  styleUrls: ['./user-insert.component.css']
})
export class UserInsertComponent implements OnInit {

  @Input() mysection: any;
  constructor(private InscrService: SignService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(f: NgForm) {

    f.value.role = this.mysection;
    this.InscrService.register(f.value).subscribe(
      (data) => {
        alert('success');
        this.router.navigateByUrl('admin/' + this.mysection);
      },
      (err) => {
        alert(err.error);
      }
    );
  }
}
