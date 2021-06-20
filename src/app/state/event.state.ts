import { Injectable } from '@angular/core';

@Injectable()
export class EventState {
  private comments = [];

  getComments(): any[] {
    return this.comments;
  }

  addComment(comment: string): void {
    this.comments.push(comment);
  }

  updateComment(comment: string): void {
    debugger;
    let currentComment = this.comments;

    let newComments = currentComment.map(x => {debugger; return x == "test" ?  comment: x});

    this.comments = newComments;
  }
}
