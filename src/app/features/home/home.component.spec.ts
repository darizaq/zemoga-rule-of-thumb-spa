import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of, throwError } from 'rxjs';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { mockRulingsList } from '@mocks/rulings-list.mock';
import { HomeComponent } from './home.component';
import { RulingsService } from '@core/services/rulings/rulings.service';

describe('HomeComponent', () => {
  const rulingServiceMock = {
    getRulingsList: jasmine.createSpy('getRulingsList').and.returnValue(of())
  };
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let rulingsService: RulingsService;

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
      declarations: [HomeComponent],
      providers: [{ provide: RulingsService, useValue: rulingServiceMock }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    rulingsService = TestBed.inject(RulingsService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get rulings list data', () => {
    rulingsService.getRulingsList = jasmine.createSpy('getRulingsList').and.returnValue(of(mockRulingsList));

    component.ngOnInit();

    expect(component.items).toEqual(mockRulingsList);
    expect(component.hasError).toBeFalse();
  });

  it('should get error response', () => {
    rulingsService.getRulingsList = jasmine.createSpy('getRulingsList').and.returnValue(throwError({}));

    component.ngOnInit();

    expect(component.hasError).toBeTrue();
  });
});
