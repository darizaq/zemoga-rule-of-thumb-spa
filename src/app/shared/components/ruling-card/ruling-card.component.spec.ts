import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { ImageHelperService } from '@core/services/image-helper/image-helper.service';
import { ImgSrcsetPipe } from '@shared/pipes/img-srcset/img-srcset.pipe';
import { RulingCardComponent } from './ruling-card.component';

describe('RulingCardComponent', () => {
  let component: RulingCardComponent;
  let fixture: ComponentFixture<RulingCardComponent>;

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
      providers: [ImageHelperService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RulingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set image resources array', () => {
    const expectedImageResources = 2;

    expect(component.imageResources.length).toEqual(expectedImageResources);
  });

  it('should update positive vote', () => {
    const voteValue = 2;
    const increment = 1;
    const expectedValue = voteValue + increment;

    component.ruling.votes.negative = voteValue;
    component.ruling.votes.positive = voteValue;

    component.updateVotes(true);

    expect(component.ruling.votes.positive).toEqual(expectedValue);
    expect(component.isPositiveState).toBeTrue();
  });

  it('should update negative vote', () => {
    const voteValue = 2;
    const increment = 1;
    const expectedValue = voteValue + increment;

    component.ruling.votes.negative = voteValue;
    component.ruling.votes.positive = voteValue;

    component.updateVotes(false);

    expect(component.ruling.votes.negative).toEqual(expectedValue);
    expect(component.isPositiveState).toBeFalse();
  });
});
