import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseURL = "http://localhost:8080/posts";
  constructor(private httpClient: HttpClient) { }

  getPostsList(): Observable<any> {
    return this.httpClient.get<any>(`${this.baseURL}`);
  }

  getPostById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.baseURL}/${id}`);
  }

  createPost(post: Post): Observable<any> {
    return this.httpClient.post(`${this.baseURL}`, post);
  }

  updatePost(id: number, post: Post): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, post);
  }

  deletePost(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
