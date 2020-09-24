import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {

  id: number;
  post: Post = new Post();
  alert: boolean = false;
  constructor(private postService: PostService, private routeActive: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.routeActive.snapshot.params['id'];
    this.postService.getPostById(this.id).subscribe(data => {
      this.post = data;
    }, error => console.log(error));
  }

  onSubmit() {
    this.postService.updatePost(this.id, this.post).subscribe(data => {
      this.alert = true;
    }, error => console.log(error));
  }
  closeAlert() {
    this.alert = false;
  }
}