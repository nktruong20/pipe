import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogService } from '../service/blog.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  formIn4 = new FormGroup({
    name:new FormControl(''),
    category_id:new FormControl(''),
    avatar:new FormControl('')
  })

  constructor(private blogService:BlogService,private router:Router) { }

  ngOnInit(): void {
  }
  formSubmit(){
    this.blogService.addProduct(this.formIn4.value).subscribe((data:any)=>{
      if(data){
        this.router.navigate([''])
      }
    })
  }
  get form():any{
    return this.formIn4.controls;
  }

}
