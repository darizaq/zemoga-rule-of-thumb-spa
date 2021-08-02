import { Apollo } from 'apollo-angular';
import { ApolloQueryResult, DocumentNode, FetchResult } from '@apollo/client/core';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { negativeVoteOperation } from './operations/negative-vote-operation.constants';
import { positiveVoteOperation } from './operations/positive-vote-operation.constants';
import {
  RulingCard,
  RulingItemResponse,
  RulingsListResponse,
  VoteMutationResponse,
  VoteResponse
} from '@core/interfaces';
import { rulingsListOperation } from './operations/rulings-list-operation.constants';

@Injectable({
  providedIn: 'root'
})
export class RulingsService {
  constructor(private apollo: Apollo) {}

  /**
   * Get rulings list from API
   *
   * @returns Ruling card items array observable
   */
  public getRulingsList(): Observable<Array<RulingCard>> {
    const { query, variables } = rulingsListOperation;

    return this.apollo
      .watchQuery<RulingsListResponse>({ query, variables })
      .valueChanges.pipe(map((response: ApolloQueryResult<RulingsListResponse>) => this.mapRulingsList(response)));
  }

  /**
   * Updates negative votes for the given ruling item on the API
   *
   * @param rulingId - Ruling item id
   * @returns Vote response observable
   */
  public updateNegativeVotes(rulingId: string): Observable<VoteResponse | undefined> {
    const mutation = negativeVoteOperation.mutationQuery;
    const variables = this.getUpdateVariable(rulingId);

    return this.voteMutation(mutation, variables).pipe(
      map((response: FetchResult<VoteMutationResponse>) => response?.data?.addNegativeVote)
    );
  }

  /**
   * Updates negative votes for the given ruling item on the API
   *
   * @param rulingId - Ruling item id
   * @returns Vote response observable
   */
  public updatePositiveVotes(rulingId: string): Observable<VoteResponse | undefined> {
    const mutation = positiveVoteOperation.mutationQuery;
    const variables = this.getUpdateVariable(rulingId);

    return this.voteMutation(mutation, variables).pipe(
      map((response: FetchResult<VoteMutationResponse>) => response?.data?.addPositiveVote)
    );
  }

  /**
   * Helper method to map API response into UI items list
   *
   * @param response - Apollo query response
   * @returns Ruling cards list
   */
  private mapRulingsList(response: ApolloQueryResult<RulingsListResponse>): Array<RulingCard> {
    return response?.data?.listCelebrities?.items.map(this.mapRulingItem);
  }

  /**
   * Helper method to map API ruling item into UI ruling card item
   *
   * @param responseItem - Ruling item API response
   * @returns Ruling card item
   */
  private mapRulingItem(responseItem: RulingItemResponse): RulingCard {
    const { category, description, id, lastUpdated, name, photo } = responseItem;

    return {
      category,
      description,
      id,
      lastUpdated,
      name,
      photo,
      votes: {
        negative: responseItem.negativeVotes,
        positive: responseItem.positiveVotes
      }
    };
  }

  /**
   * Helper method for vote mutation
   *
   * @param mutation - Operation query
   * @param variables - Operation variables
   * @returns Vote mutation response observable
   */
  private voteMutation(mutation: DocumentNode, variables: object): Observable<FetchResult<VoteMutationResponse>> {
    return this.apollo.mutate<VoteMutationResponse>({ mutation, variables });
  }

  /**
   * Obtains variables object for mutation operations
   *
   * @param id - Item id
   * @returns Variables object
   */
  private getUpdateVariable(id: string): object {
    return { voteCelebrityInput: { id } };
  }
}
