import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { SelectComponent } from './select.component';

describe('SelectComponent', () => {
  const mockItems = [{ label: 'label', value: 'value' }];
  let component: SelectComponent;
  let debugElement: DebugElement;
  let fixture: ComponentFixture<SelectComponent>;
  let itemChangeEmitSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader
          }
        })
      ],
      declarations: [SelectComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    itemChangeEmitSpy = spyOn(component.itemChange, 'emit');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set items list', () => {
    const itemIndex = 0;
    const activeItem = mockItems[itemIndex];

    component.items = mockItems;

    expect(component.activeItem).toEqual(activeItem);
    expect(itemChangeEmitSpy).toHaveBeenCalledWith(activeItem);
  });

  it('should select active item', () => {
    const itemIndex = 0;
    const activeItem = mockItems[itemIndex];

    component.updateActiveItem(activeItem);

    expect(component.activeItem).toEqual(activeItem);
    expect(itemChangeEmitSpy).toHaveBeenCalledWith(activeItem);
    expect(component.open).toBeFalse();
  });

  it('should show items list', () => {
    component.open = false;

    component.toggleSelect();

    expect(component.open).toBeTrue();
  });

  it('should hide items list', () => {
    component.open = true;

    component.toggleSelect();

    expect(component.open).toBeFalse();
  });

  it('should hide items list on click outside', () => {
    const mockEvent = { target: document.body } as unknown as Event;

    component.open = true;

    component.onClickOutside(mockEvent);

    expect(component.open).toBeFalse();
  });

  it(`shouldn't open value be modified by click handler`, () => {
    const mockEvent = { target: debugElement.nativeElement } as unknown as Event;

    component.open = false;

    component.onClickOutside(mockEvent);

    expect(component.open).toBeFalse();
  });
});
