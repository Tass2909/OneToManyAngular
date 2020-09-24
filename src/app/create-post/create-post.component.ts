import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  post: Post = new Post();
  alert : boolean = false;
  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.postService.createPost(this.post).subscribe(data => {
      this.alert = true;
    },
      error => console.log(error));
  }
}
