import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Blog } from 'src/app/models/blog.model';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
 blog:Blog=new Blog();
  constructor(private blogService : BlogService,private route: ActivatedRoute) { 
       

    }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params : ParamMap)=> {  
      this.blog.id=params.get('id');
      this.getBlogInfo(this.blog.id);
  })}
  getBlogInfo(id:number){
    
    console.log("id:",id);
    this.blogService.get(id).subscribe(
      data=>{
        this.blog=data[0];
        console.log("blog",this.blog);
      }
    )
    
    }
  }
