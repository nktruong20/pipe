import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../model/blog';
import { BlogService } from '../service/blog.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  listBlog:Blog = new Blog;
  constructor(private actRoute:ActivatedRoute,private router:Router,private blogService:BlogService) { }

  ngOnInit(): void {
    let _id = this.actRoute.snapshot.params['id'];
    this.blogService.find(_id).subscribe((data)=>{
      return this.listBlog = data;
    })
  }

}
