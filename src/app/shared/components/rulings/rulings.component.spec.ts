import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { RulingsComponent } from './rulings.component';
import { rulingsConstants as constants } from './rulings.constants';

describe('RulingsComponent', () => {
  let component: RulingsComponent;
  let fixture: ComponentFixture<RulingsComponent>;

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
      declarations: [RulingsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RulingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set view type', () => {
    const viewTypeIndex = 1;
    const viewType = constants.viewOptions[viewTypeIndex];

    component.onViewOptionChange(viewType);

    expect(component.currentViewType).toEqual(viewType);
  });
});
