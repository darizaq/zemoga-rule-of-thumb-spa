import { Component, Input } from '@angular/core';

import { mockRulingCard } from '@mocks/ruling-card.mock';
import { RulingCard } from '@core/interfaces';
import { rulingsConstants } from '@shared/components/rulings/rulings.constants';
import { rulingCardConstants as constants } from './ruling-card.constants';

@Component({
  selector: 'zmg-ruling-card',
  templateUrl: './ruling-card.component.html',
  styleUrls: ['./ruling-card.component.scss', './ruling-card-list-type.component.scss']
})
export class RulingCardComponent {
  public imagePath = constants.imageBasePath;
  public isPositiveState = false;
  public ruling: RulingCard;
  public viewType = rulingsConstants.viewType;

  @Input() public type = this.viewType.grid;

  constructor() {
    this.ruling = mockRulingCard;

    this.updatePositiveState();
  }

  /**
   * Updates vote values
   *
   * @param isPositiveVote - Vote value
   */
  public updateVotes(isPositiveVote: boolean): void {
    isPositiveVote ? (this.ruling.votes.positive += 1) : (this.ruling.votes.negative += 1);

    this.updatePositiveState();
  }

  /**
   * Updates positive state for ruling card
   */
  private updatePositiveState(): void {
    this.isPositiveState = mockRulingCard.votes.positive >= mockRulingCard.votes.negative;
  }
}
