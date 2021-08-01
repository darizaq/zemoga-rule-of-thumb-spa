import { Component } from '@angular/core';

import { rulingsConstants as constants } from './rulings.constants';
import { SelectItem } from '@core/interfaces';

@Component({
  selector: 'zmg-rulings',
  templateUrl: './rulings.component.html',
  styleUrls: ['./rulings.component.scss']
})
export class RulingsComponent {
  public currentViewType: SelectItem;
  // eslint-disable-next-line
  public rulings = new Array(6);
  public viewOptions: Array<SelectItem> = constants.viewOptions;
  public viewType = constants.viewType;

  constructor() {
    [this.currentViewType] = this.viewOptions;
  }

  /**
   * Handles view type change
   *
   * @param item - Selected view type
   */
  public onViewOptionChange(item: SelectItem): void {
    this.currentViewType = item;
  }
}
