import { Component, OnInit } from '@angular/core';
import { AppFacade } from '../app.facade';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  comments: any[];
  constructor(private _appFacade: AppFacade) {}

  ngOnInit(): void {
    this.comments = this._appFacade.comments;
  }
}
