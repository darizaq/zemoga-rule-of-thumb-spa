import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { ImageHelperService } from '@core/services/image-helper/image-helper.service';
import { ImgSrcsetPipe } from '@shared/pipes/img-srcset/img-srcset.pipe';
import { mockNegativeResponse, mockPositiveResponse } from '@mocks/votes.mock';
import { mockRulingCard } from '@mocks/ruling-card.mock';
import { RulingCardComponent } from './ruling-card.component';
import { RulingsService } from '@core/services/rulings/rulings.service';

describe('RulingCardComponent', () => {
  const updateNegativeVotesSpy = jasmine.createSpy('updateNegativeVotes').and.returnValue(of(mockNegativeResponse));
  const updatePositiveVotesSpy = jasmine.createSpy('updatePositiveVotes').and.returnValue(of(mockPositiveResponse));
  const rulingsServiceMock = {
    updateNegativeVotes: updateNegativeVotesSpy,
    updatePositiveVotes: updatePositiveVotesSpy
  };
  let component: RulingCardComponent;
  let fixture: ComponentFixture<RulingCardComponent>;
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
      declarations: [ImgSrcsetPipe, RulingCardComponent],
      providers: [{ provide: RulingsService, useValue: rulingsServiceMock }, ImageHelperService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RulingCardComponent);
    component = fixture.componentInstance;
    rulingsService = TestBed.inject(RulingsService);
    component.ruling = mockRulingCard;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update ruling data', () => {
    const expectedImageResources = 2;
    const value = 2;

    mockRulingCard.votes.negative = value;
    mockRulingCard.votes.positive = value;
    component.ruling = mockRulingCard;

    fixture.detectChanges();

    expect(component.isPositiveState).toBeTrue();
    expect(component.imageResources.length).toEqual(expectedImageResources);
  });

  it('should update positive vote', () => {
    component.updateVotes(true);

    expect(rulingsService.updatePositiveVotes).toHaveBeenCalledWith(mockRulingCard.id);
  });

  it('should update negative vote', () => {
    component.updateVotes(false);

    expect(rulingsService.updateNegativeVotes).toHaveBeenCalledWith(mockRulingCard.id);
  });

  it(`shouldn't update vote value for undefined response`, () => {
    const value = 2;

    mockRulingCard.votes.negative = value;
    mockRulingCard.votes.positive = value;
    component.ruling = mockRulingCard;

    component['handleVoteResponse'](undefined);

    expect(component.ruling.votes.negative).toEqual(value);
    expect(component.ruling.votes.positive).toEqual(value);
  });
});
