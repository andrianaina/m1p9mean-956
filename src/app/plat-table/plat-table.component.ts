import { Router } from '@angular/router';
import { OtherService } from './../services/other.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-plat-table',
  templateUrl: './plat-table.component.html',
  styleUrls: ['./plat-table.component.css']
})
export class PlatTableComponent implements OnInit {
  @Input() listplat!:any[];
  constructor(private service:OtherService,private router:Router) { }

  ngOnInit(): void {
  }

  updatePlat(f:NgForm,id:any,isvisible:any){
    f.value.id=id;
    f.value.isvisible=isvisible;

    this.service.updateVisibilityPlat(f.value).subscribe(
      (data)=>{
        alert('success');
      }
      ,(err)=>{
        alert(err.error);
      }
    );
    window.location.reload();
  }
}
