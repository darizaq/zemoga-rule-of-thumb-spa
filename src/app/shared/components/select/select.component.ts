import { Component, EventEmitter, Input, Output } from '@angular/core';

import { SelectItem } from '@core/interfaces';

@Component({
  selector: 'zmg-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Output() public itemChange: EventEmitter<SelectItem> = new EventEmitter();

  public activeItem: SelectItem = {} as SelectItem;
  public open = false;

  private selectItems: Array<SelectItem> = [];

  @Input()
  public set items(selectItems: Array<SelectItem>) {
    [this.activeItem] = selectItems;
    this.itemChange.emit(this.activeItem);
    this.selectItems = selectItems;
  }

  public get items(): Array<SelectItem> {
    return this.selectItems;
  }

  /**
   * Updates active item from list selected item
   *
   * @param item - Selected item
   */
  public updateActiveItem(item: SelectItem): void {
    this.activeItem = item;
    this.itemChange.emit(item);
    this.open = false;
  }

  /**
   * Toggle items list visibility
   */
  public toggleSelect(): void {
    this.open = !this.open;
    console.log('asdasasdas', this.open);
  }
}
