import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsListComponent } from './posts-list/posts-list.component';
import { ShowComponent } from './show/show.component';
import { AddPostComponent } from './add-post/add-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditPostComponent } from './edit-post/edit-post.component';
import { MyPostsComponent } from './my-posts/my-posts.component';
import { AuthGuard } from 'src/app/core/guards/AuthGuard';

const routes: Routes = [
  {
    path: '',
    component: PostsListComponent
  },
  {
    path: 'posts/:search-filter',
    component: PostsListComponent
  },
  {
    path: 'post/add',
    canActivate: [AuthGuard],
    component: AddPostComponent
  },
  {
    path: 'post/edit/:post-id',
    canActivate: [AuthGuard],
    component: EditPostComponent
  },
  {
    path: 'post/:post-id',
    component: ShowComponent
  },
  {
    path: 'my-posts',
    canActivate: [AuthGuard],
    component: MyPostsComponent
  },
  {
    path: 'my-posts/:search-filter',
    component: MyPostsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
