import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comment } from '../comment';
import { CommentService } from '../comment.service';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts: Post[];
  contents = [];
  comments: Comment[];
  tabComments = [];
  constructor(private postService: PostService, private route: Router) { }

  ngOnInit(): void {
    this.getPosts();
  }
  private getPosts() {
    this.postService.getPostsList().subscribe(data => {
      this.posts = data;
      this.contents = this.posts[Object.keys(this.posts)[0]];
    });
  }

  viewComments(id: number) {
    this.route.navigate(['view-comments', id]);
  }
}
