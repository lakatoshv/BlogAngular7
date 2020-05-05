import { CommentsService } from './../../../../core/services/posts-services/comments.service';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CommentForm } from 'src/app/core/forms/posts/CommentForm';

import { Comment } from '../../../../core/models/Comment';
import { User } from 'src/app/core/models/User';
import { UsersService } from 'src/app/core/services/users/users-service.service';
import { GlobalService } from 'src/app/core/services/global-service/global-service.service';

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.css']
})
export class EditCommentComponent implements OnInit {
  /**
   * @param comment Comment
   */
  @Input() comment: Comment;

  /**
   * @param loggedIn boolean
   */
  public loggedIn = false;

  /**
   * @param user User
   */
  public user: User = null;

  /**
   * @param commentForm FormGroup
   */
  commentForm: FormGroup = new CommentForm().commentForm;

  /**
   * @param _usersService UsersService
   * @param _globalService GlobalService
   */
  constructor(
    private _usersService: UsersService,
    private _globalService: GlobalService,
    private _commentsService: CommentsService
  ) { }

  /**
   * @inheritdoc
   */
  ngOnInit() {
    this.loggedIn = this._usersService.isLoggedIn();

    if (this.loggedIn) {
      this._globalService.resetUserData();
      this.user = this._globalService._currentUser;
    }
    if (this.user.Id === this.comment.AuthorId) {
      this.setFormValue();
    }
  }

  /**
   * Sets form value
   * @returns void
   */
  public setFormValue(): void {
    this.commentForm.get('name').setValue(this.comment.Author.FirstName + ' ' + this.comment.Author.LastName);
    this.commentForm.get('email').setValue(this.comment.Author.Email);
    this.commentForm.get('content').setValue(this.comment.Content);
  }

  /**
   * Edit comment
   * @param comment Comment
   * @returns void
   */
  public edit(): void {
    if (this.user.Id === this.comment.AuthorId) {
      this.comment.Content = this.commentForm.get('content').value;
      this._commentsService.editComment(this.comment);
    }
  }
}
