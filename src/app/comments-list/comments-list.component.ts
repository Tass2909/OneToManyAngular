import { Comment } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CommentService } from '../comment.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {
  id: number;
  posts: Post[];
  contents = [];
  comments: Comment[];
  tabComments = [];
  constructor(private commentService: CommentService, private routeActive: ActivatedRoute, private postService: PostService) { }

  ngOnInit(): void {
    this.id = this.routeActive.snapshot.params['id'];
    this.postService.getPostById(this.id).subscribe(dataPost => {
      this.posts = dataPost;
      this.contents = this.posts[Object.keys(this.posts)[3]];
      console.log(this.contents);
    });
    this.commentService.getCommentsList(this.id).subscribe(data => {
      this.comments = data;
      this.tabComments = this.comments[Object.keys(this.comments)[0]];
    });
  }

}
