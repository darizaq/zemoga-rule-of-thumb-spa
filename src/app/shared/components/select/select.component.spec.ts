import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { SelectComponent } from './select.component';

describe('SelectComponent', () => {
  const mockItems = [{ label: 'label', value: 'value' }];
  let component: SelectComponent;
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
});
