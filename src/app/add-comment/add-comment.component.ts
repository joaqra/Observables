import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AppFacade } from '../app.facade';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {

  commentControl: FormControl = new FormControl('');
  constructor(
    private appFacade: AppFacade
  ) { }

  ngOnInit(): void {
  }

  onAddComment(){
    debugger;
    let commentValue = this.commentControl.value;

    this.appFacade.addComment(commentValue);
  }

}
