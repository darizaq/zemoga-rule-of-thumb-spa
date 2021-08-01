import { Component } from '@angular/core';

import { rulingsConstants as constants } from './rulings.constants';

@Component({
  selector: 'zmg-rulings',
  templateUrl: './rulings.component.html',
  styleUrls: ['./rulings.component.scss']
})
export class RulingsComponent {
  public currentViewType: string;
  // eslint-disable-next-line
  public rulings = new Array(6);
  public viewType = constants.viewType;

  constructor() {
    this.currentViewType = constants.viewType.list;
  }
}
