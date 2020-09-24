import { Component, OnInit } from '@angular/core';
import { CommentService } from '../comment.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../post';
import { Comment } from '../comment';
import { PostService } from '../post.service';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {
  id: number;
  alert:boolean = false;
  posts: Post[];
  contents = [];
  comments: Comment[];
  tabComments = [];
  commentaire: Comment = new Comment();
  constructor(private commentService: CommentService, private routeActive: ActivatedRoute, private postService: PostService) { }

  ngOnInit(): void {
    this.id = this.routeActive.snapshot.params['id'];
    this.postService.getPostById(this.id).subscribe(dataPost => {
      this.posts = dataPost;
      this.contents = this.posts['title'];
    });
    this.getAllComments();
  }

  private getAllComments(){
    this.commentService.getCommentsList(this.id).subscribe(data => {
      this.comments = data;
      this.tabComments = this.comments['content'];
    });
  }

  onSubmit() {
    this.commentService.createComment(this.id, this.commentaire).subscribe(data => {
      this.alert = true;
      this.getAllComments();
    },
      error => console.log(error));
  }
  closeAlert(){
    this.alert = false;
  }

  deleteComment(idcomment:number){
    this.commentService.deleteComment(idcomment,this.id).subscribe(data => {
      this.getAllComments();
    });
  }
}
