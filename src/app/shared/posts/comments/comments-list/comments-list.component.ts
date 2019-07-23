import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import { GeneralServiceService } from 'src/app/core';
import { AddCommentComponent } from "../add-comment/add-comment.component";

import { Comments } from 'src/app/core/data/comments';
import { Comment } from 'src/app/core/models/comment';
import { UsersService } from 'src/app/core/services/users/users-service.service';
import { GlobalService } from 'src/app/core/services/global-service/global-service.service';
import { User } from 'src/app/core/models/user';
import { Users } from 'src/app/core/data/users';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {
  @Input("post-id") postId: number;

  private users: User[] = [];
  public comments: any = [];
  public user: User;

  public loggedIn: boolean = false;

  private _isLoadEdit: boolean = false; 

  
  constructor(
    private _generalService: GeneralServiceService,
    private _activatedRoute: ActivatedRoute,
    private _usersService: UsersService,
    private _globalService: GlobalService
  ) { }

  ngOnInit() {
    this._getCommentsForCurrentPost();
    
    this.loggedIn = this._usersService.isLoggedIn();
    if(this.loggedIn){
      this._globalService.resetUserData();  
      this.user = this._globalService._currentUser;
    }
  }

  public findByValue(){
    //const index = Data.findIndex(item => item.name === 'John');
  }

  private _getCommentsForCurrentPost(): void{
    this.users = Users;
    var comments = Comments.filter(item => item.post_id === this.postId).forEach(comment => {
      comment.author = this.users[comment.authorId];
      this.comments.push(comment);
    })
  }

  private _onLoadEditAction(){
    this._isLoadEdit = true;
  }

  private _onAddAction(comment: any){
    this.comments.unshift(comment);
  }

  private _onEditAction(comment: any){
    let index = this.comments.findIndex(x => x.id === comment.id);
        if (index > -1)
            this.comments[index] = comment;
  }

  private _deleteAction(comment){
    let index = this.comments.findIndex(x => x.id === comment.id);
        if (index > -1)
            this.comments.splice(index, 1);
  }

}
