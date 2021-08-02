import { Apollo } from 'apollo-angular';
import { ApolloQueryResult } from '@apollo/client/core';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { RulingCard, RulingItemResponse, RulingsListResponse } from '@core/interfaces';
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
      .valueChanges.pipe(map(this.mapRulingsList.bind(this)));
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
}
