import { Injectable } from '@angular/core';
import { EventState } from './state/event.state';

@Injectable()
export class AppFacade {
  constructor(private eventState: EventState) {}

  get comments(): any[] {
    return this.eventState.getComments();
  }

  addComment(comment: string): void {
    this.eventState.addComment(comment);
  }
  
  updateComment(comment: string): void {
    this.eventState.updateComment(comment);
  }
}
