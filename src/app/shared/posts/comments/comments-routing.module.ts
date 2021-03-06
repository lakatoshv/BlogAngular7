import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CommentsListComponent} from './comments-list/comments-list.component';
import {AddCommentComponent} from './add-comment/add-comment.component';
import { from } from 'rxjs';
import { EditCommentComponent } from './edit-comment/edit-comment.component';
import { AuthGuard } from 'src/app/core/guards/AuthGuard';

const routes: Routes = [
  {
    path: '',
    component: CommentsListComponent
  },
  {
    path: 'add',
    canActivate: [AuthGuard],
    component: AddCommentComponent
  },
  {
    path: 'edit/:comment-id',
    canActivate: [AuthGuard],
    component: EditCommentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule { }
    