import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentsListComponent } from './comments-list/comments-list.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { UpdateCommentComponent } from './update-comment/update-comment.component';
import { UpdatePostComponent } from './update-post/update-post.component';

const routes: Routes = [
  { path: 'posts', component: PostsListComponent },
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: 'create-post', component: CreatePostComponent },
  { path: 'view-comments/:id', component: CommentsListComponent },
  { path: 'update-post/:id', component: UpdatePostComponent},
  { path: 'update-comment/:idPost/:idComment', component: UpdateCommentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
