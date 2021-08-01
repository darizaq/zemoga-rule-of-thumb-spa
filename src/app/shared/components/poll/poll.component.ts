import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as moment from 'moment';

import { pollConstants as constants } from './poll.constants';

@Component({
  selector: 'zmg-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.scss']
})
export class PollComponent {
  @Input() public category = '';
  @Input() public showBigButtons = false;
  @Output() public pollSubmitted = new EventEmitter<boolean>();

  public filled = false;
  public isPositiveVote = false;
  public timeAgo = '';
  public submitted = false;

  private pollLastUpdated: string = '';

  constructor() {
    moment.updateLocale(constants.localeCode, constants.localeFormats);
  }

  @Input()
  public set lastUpdated(pollLastUpdated: string) {
    this.timeAgo = moment(new Date(pollLastUpdated)).fromNow();
    this.pollLastUpdated = pollLastUpdated;
  }

  public get lastUpdated(): string {
    return this.pollLastUpdated;
  }

  /**
   * Marks user vote
   * @param isPositive - Vote value
   */
  public fillOutPoll(isPositive: boolean): void {
    this.isPositiveVote = isPositive;
    this.filled = true;
  }

  /**
   * Handles click event for click button
   */
  public voteAction(): void {
    if (this.filled) {
      this.pollSubmitted.emit(this.isPositiveVote);
    }

    this.filled = false;
    this.submitted = !this.submitted;
  }
}
