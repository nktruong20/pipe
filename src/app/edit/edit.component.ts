import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../service/blog.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id:any;
  blogImg:any;

  formIn4 = new FormGroup({
    name:new FormControl(''),
    category_id:new FormControl(''),
    avatar:new FormControl('')
  })

  constructor(private actRoute:ActivatedRoute,private router:Router,private blogService:BlogService) { }

  ngOnInit(): void {
    this.id = this.actRoute.snapshot.params['id'];
    this.blogService.find(this.id).subscribe((data)=>{
      if(data){
        this.formIn4.patchValue(data);
      }else{
        console.log('404')
      }
    })
  }
  formSubmit(){
    this.blogService.update(this.id,this.formIn4.value).subscribe((data)=>{
      if(data){
        this.router.navigate(['/'])
      }else{
        console.log('404');
      }
    })
  }
  get form():any{
    return this.formIn4.controls;
  }

}
