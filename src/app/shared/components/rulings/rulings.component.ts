import { Component, Input } from '@angular/core';

import { RulingCard, SelectItem } from '@core/interfaces';
import { rulingsConstants as constants } from './rulings.constants';

@Component({
  selector: 'zmg-rulings',
  templateUrl: './rulings.component.html',
  styleUrls: ['./rulings.component.scss']
})
export class RulingsComponent {
  @Input() public rulings: Array<RulingCard> = [];

  public currentViewType: SelectItem;
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

  /**
   * Helper NgFor trackBy method
   *
   * @param index - Item index
   * @param ruling - Ruling item
   * @returns Ruling item id
   */
  public rulingsTrackByFunction(index: number, ruling: RulingCard): string {
    return ruling.id;
  }
}
