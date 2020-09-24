import { Component, OnInit } from '@angular/core';
import { CommentService } from '../comment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../post';
import { Comment } from '../comment';
import { PostService } from '../post.service';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {
  idPost: number;
  alert:boolean = false;
  posts: Post[];
  contents = [];
  comments: Comment[];
  tabComments = [];
  commentaire: Comment = new Comment();
  constructor(private commentService: CommentService, private routeActive: ActivatedRoute, private postService: PostService, private route:Router) { }

  ngOnInit(): void {
    this.idPost = this.routeActive.snapshot.params['id'];
    this.postService.getPostById(this.idPost).subscribe(dataPost => {
      this.posts = dataPost;
      this.contents = this.posts['title'];
    });
    this.getAllComments();
  }

  private getAllComments(){
    this.commentService.getCommentsList(this.idPost).subscribe(data => {
      this.comments = data;
      this.tabComments = this.comments['content'];
    });
  }

  onSubmit() {
    this.commentService.createComment(this.idPost, this.commentaire).subscribe(data => {
      this.alert = true;
      this.getAllComments();
    },
      error => console.log(error));
  }
  closeAlert(){
    this.alert = false;
  }

  updateComment(idComment:number){
    this.route.navigate(['update-comment/',idComment,this.idPost]);
  }

  deleteComment(idcomment:number){
    this.commentService.deleteComment(idcomment,this.idPost).subscribe(data => {
      this.getAllComments();
    });
  }
}
