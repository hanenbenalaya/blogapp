import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog } from '../models/blog.model';
import { map } from 'rxjs/operators';

const baseUrl = 'http://localhost:8080/api/blogs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }
  getAll(page:number,size:number): Observable<Blog[]> {
    return this.http.get<GetResponseBlogs>(`${baseUrl}?page=${page}&size=${size}`).pipe(map(response => response.content));  
  }

  get(id: any): Observable<Blog> {
    return this.http.get<GetResponseBlog>(`${baseUrl}id/${id}?page=0&size=5`).pipe(map(response => response.content));
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(data: any): Observable<any> {
    return this.http.put(baseUrl, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  gettotalpage(page:number,size:number): Observable<number> {
    return this.http.get<GetResponseBlogs>(`${baseUrl}?page=${page}&size=${size}`).pipe(map(response => response.totalPages));  
  }
 

  findByTitle(title: any,page:number,size:number): Observable<Blog[]> {
    return this.http.get<GetResponseBlogs>(`${baseUrl}title/${title}?page=${page}&size=${size}`).pipe(map(response => response.content));
  }
  findBycontent(content: any,page:number,size:number): Observable<Blog[]> {
    return this.http.get<GetResponseBlogs>(`${baseUrl}content/${content}?page=${page}&size=${size}`).pipe(map(response => response.content));
  }
  findByauthor(author: any,page:number,size:number): Observable<Blog[]> {
    return this.http.get<GetResponseBlogs>(`${baseUrl}author/${author}?page=${page}&size=${size}`).pipe(map(response => response.content));
  }
  
}
interface GetResponseBlogs{
  content: Blog[];
  totalPages: number;
  }
  interface GetResponseBlog{
    content: Blog;
    totalPages: number;
    }
