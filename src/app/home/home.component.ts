import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../service/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listBlog:any;
  keyword:any;
  list:any

  constructor(private blogService:BlogService,private actRoute:ActivatedRoute) { }

 

  ngOnInit(): void {
    this.blogService.getAll().subscribe((data)=>{
      return this.listBlog = data;
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
