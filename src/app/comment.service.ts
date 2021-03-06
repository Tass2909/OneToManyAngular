import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Comment } from '../app/comment';
@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private baseURL = "http://localhost:8080/posts";
  constructor(private httpClient: HttpClient) { }

  getCommentsList(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.baseURL}/${id}/comments`);
  }

  getCommentById(idComment:number, idPost:number):Observable<any>{
    return this.httpClient.get<any>(`${this.baseURL}/${idPost}/comments/${idComment}`);
  }

  createComment(id: number, comment: Comment): Observable<any> {
    return this.httpClient.post(`${this.baseURL}/${id}/comments`, comment);
  }

  updateComment(idpost: number, idcomment: number, comment: Comment): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${idpost}/comments/${idcomment}`, comment);
  }

  deleteComment(idcomment: number, idpost: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${idpost}/comments/${idcomment}`);
  }


}