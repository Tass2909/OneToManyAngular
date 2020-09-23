import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private baseURL = "http://localhost:8080/posts";
  constructor(private httpClient: HttpClient) { }

  getCommentsList(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.baseURL}/${id}/comments`);
  }
}
