import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Blog } from 'src/app/models/blog.model';
import { BlogService } from 'src/app/services/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
 blog = new Blog();
 title:any;
 content:any;
 author:any;
  constructor( private blogService : BlogService,private router: Router) { }

  ngOnInit(): void {
  }
  form = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    content: new FormControl('', [Validators.required, Validators.minLength(8)]),
    author: new FormControl('', [Validators.required,Validators.minLength(4)])
  });
  
  get f(){
    return this.form.controls;
  }
  
  submit(data){
    console.log("data : "+data.title);

    this.blog.title=data.title;
    this.blog.content=data.content;
    this.blog.author=data.author;
    this.blog.upvote=0;
    this.blog.downvote=0;
 this.blogService.create(this.blog).subscribe();
    console.log(this.blog);
    this.lst();
    
  }
  lst(){
    this.router.navigateByUrl('/blogs');
  }
  

}
