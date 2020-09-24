import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentService } from '../comment.service';
import { PostService } from '../post.service';
import { Comment } from '../comment';

@Component({
  selector: 'app-update-comment',
  templateUrl: './update-comment.component.html',
  styleUrls: ['./update-comment.component.css']
})
export class UpdateCommentComponent implements OnInit {
  idPost: number;
  idComment: number;
  comment: Comment = new Comment();
  constructor(private commentService: CommentService, private routeActive: ActivatedRoute, private postService: PostService, private route: Router) { }

  ngOnInit(): void {
    this.idComment = this.routeActive.snapshot.params['idPost'];
    this.idPost = this.routeActive.snapshot.params['idComment'];
    this.commentService.getCommentById(this.idComment, this.idPost).subscribe(data => {
      this.comment = data;
    }, error => console.log(error));
  }

  onSubmit() {
    this.commentService.updateComment(this.idPost, this.idComment, this.comment).subscribe(data => {
      this.route.navigate(['view-comments', this.idPost]);
    }, error => console.log(error));
  }
}
