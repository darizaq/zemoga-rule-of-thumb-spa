import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { TestBed } from '@angular/core/testing';

import { mockRulingsListResponse } from '@mocks/rulings-list.mock';
import { mockVoteUpdateResponse } from '@mocks/votes.mock';
import { negativeVoteOperation } from './operations/negative-vote-operation.constants';
import { positiveVoteOperation } from './operations/positive-vote-operation.constants';
import { RulingCard, VoteResponse } from '@core/interfaces';
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

  it('should update negative votes', (done: DoneFn) => {
    const mockResponse = { data: { addNegativeVote: mockVoteUpdateResponse } };

    service.updateNegativeVotes(mockVoteUpdateResponse.id).subscribe((response: VoteResponse | undefined) => {
      expect(response).toBeInstanceOf(Object);
      expect(response).toEqual(mockResponse.data.addNegativeVote);

      done();
    });

    apolloController.expectOne(negativeVoteOperation.mutationQuery).flush(mockResponse);
    apolloController.verify();
  });

  it('should update positive votes', (done: DoneFn) => {
    const mockResponse = { data: { addPositiveVote: mockVoteUpdateResponse } };

    service.updatePositiveVotes(mockVoteUpdateResponse.id).subscribe((response: VoteResponse | undefined) => {
      expect(response).toBeInstanceOf(Object);
      expect(response).toEqual(mockResponse.data.addPositiveVote);

      done();
    });

    apolloController.expectOne(positiveVoteOperation.mutationQuery).flush(mockResponse);
    apolloController.verify();
  });
});
