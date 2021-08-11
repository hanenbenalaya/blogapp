import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog.model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blogs-liste',
  templateUrl: './blogs-liste.component.html',
  styleUrls: ['./blogs-liste.component.css']
})
export class BlogsListeComponent implements OnInit {
  searchtexttitle:any='';
  searchtextcontent:any='';
  searchtextauthor:any='';

  currentSelectedPage: number=0;
  firstpage:boolean=true;
  lastpage:boolean=false;
  pageNumber:number=1;
  totalpages:number=0;// service methode  gettotalpages
  blogs?: Blog[]; //service methode getall
  pageOfItems: Array<any>;
  constructor( private blogService : BlogService) { }

  ngOnInit(): void {

    this.ListBlogs(this.currentSelectedPage);
    if (this.currentSelectedPage==this.totalpages)
     this.lastpage=true;

  }
  ListBlogs(page:number){
    if(this.searchtexttitle==''&&this.searchtextauthor==''&&this.searchtextcontent=='')
  {this.blogService.getAll(page,10).subscribe(
      data =>this.blogs=data
    )}
    else {
      if(this.searchtexttitle!='')
      {this.blogService.findByTitle(this.searchtexttitle,page,10).subscribe(
        data =>this.blogs=data
      )} else {
        if(this.searchtextcontent!='')
        {this.blogService.findBycontent(this.searchtextcontent,page,10).subscribe(
          data =>this.blogs=data
        )}else{this.blogService.findByauthor(this.searchtextauthor,page,10).subscribe(
          data =>this.blogs=data
        )}
  
      }

    }

}
incrementupvote(blog:Blog){
  blog.upvote++;
  this.blogService.update(blog).subscribe();

}
decrementupvote(blog:Blog){
  blog.upvote--;
  this.blogService.update(blog).subscribe();

}
incrementdownvote(blog:Blog){
  blog.downvote++;
  this.blogService.update(blog).subscribe();

}
decrementdownvote(blog:Blog){
  blog.downvote--;
  this.blogService.update(blog).subscribe();

}
changecolor(blog:Blog){
  if (blog.upvote<blog.downvote)
  {console.log("true");
   return true;}
   else {  console.log("false");
   return false;}

}
previousClick(){
  this.currentSelectedPage--;
  this.ngOnInit();
}
nextClick(){
  this.currentSelectedPage--;
  this.ngOnInit();
}
}
