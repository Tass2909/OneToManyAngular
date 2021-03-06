import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { CommentsListComponent } from './comments-list/comments-list.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import { UpdateCommentComponent } from './update-comment/update-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    CreatePostComponent,
    CommentsListComponent,
    UpdatePostComponent,
    UpdateCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
