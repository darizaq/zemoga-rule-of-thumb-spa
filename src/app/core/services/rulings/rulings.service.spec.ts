import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { TestBed } from '@angular/core/testing';

import { mockRulingsListResponse } from '@mocks/rulings-list.mock';
import { RulingCard } from '@core/interfaces';
import { rulingsListOperation } from './operations/rulings-list-operation.constants';
import { RulingsService } from './rulings.service';

describe('RulingsService', () => {
  let service: RulingsService;
  let apolloController: ApolloTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApolloTestingModule],
      providers: [RulingsService]
    });

    service = TestBed.inject(RulingsService);
    apolloController = TestBed.inject(ApolloTestingController);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should get rulings data', (done: DoneFn) => {
    const itemPosition = 0;
    const responseItem = mockRulingsListResponse.data.listCelebrities.items[itemPosition];

    service.getRulingsList().subscribe((items: Array<RulingCard>) => {
      expect(items).toBeInstanceOf(Array);
      expect(items[itemPosition]).toBeTruthy();
      expect(items[itemPosition].id).toEqual(responseItem.id);
      expect(items[itemPosition].name).toEqual(responseItem.name);
      expect(items[itemPosition].votes).toBeInstanceOf(Object);
      expect(items[itemPosition].votes.negative).toEqual(responseItem.negativeVotes);
      expect(items[itemPosition].votes.positive).toEqual(responseItem.positiveVotes);

      done();
    });

    apolloController.expectOne(rulingsListOperation.query).flush(mockRulingsListResponse);
    apolloController.verify();
  });
});
