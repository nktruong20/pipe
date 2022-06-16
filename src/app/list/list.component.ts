import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../service/blog.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  listBlog:any;

  constructor(private blogService:BlogService,private route:Router,private actRouter:ActivatedRoute) { }

  ngOnInit(): void {
    let id:any;
    this.actRouter.paramMap.subscribe(params=>{
      id = params.get('id');
      if(id==1||id==2){
        this.blogService.getList(id).subscribe((data)=>{
          this.listBlog = data;
        })
      }else{
        this.blogService.getAll().subscribe((data)=>{
          this.listBlog = data
        })
      }
    })
  }
  getList(){
    this.blogService.getAll().subscribe((data)=>{
      this.listBlog = data
    })
  }
  deletePro(id:number){
    let resultConfirm = confirm('ban co muon xoa khong');
    if(resultConfirm){
      this.blogService.deletePro(id).subscribe((data)=>{
        this.listBlog = data;
        this.getList();
      })
    }
  }


}
