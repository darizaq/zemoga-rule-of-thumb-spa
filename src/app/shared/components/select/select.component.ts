import { Component, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

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

  constructor(private elementRef: ElementRef) {}

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
   * Document click event listener to handle clicks outside component
   *
   * @param event - Click event object
   */
  @HostListener('document:click', ['$event'])
  public onClickOutside(event: Event): void {
    if (!(this.elementRef.nativeElement as HTMLElement).contains(event.target as Node)) {
      this.open = false;
    }
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
  }
}
