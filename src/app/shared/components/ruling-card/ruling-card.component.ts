import { Component, Input } from '@angular/core';

import { ImageHelperService } from '@core/services/image-helper/image-helper.service';
import { ImageResource, RulingCard, VoteResponse } from '@core/interfaces';
import { rulingCardConstants as constants } from './ruling-card.constants';
import { rulingsConstants } from '@shared/components/rulings/rulings.constants';
import { RulingsService } from '@core/services/rulings/rulings.service';

@Component({
  selector: 'zmg-ruling-card',
  templateUrl: './ruling-card.component.html',
  styleUrls: ['./ruling-card.component.scss', './ruling-card-list-type.component.scss']
})
export class RulingCardComponent {
  public imageResources: Array<ImageResource> = [];
  public isPositiveState = false;
  public viewType = rulingsConstants.viewType;

  private rulingCard: RulingCard = {} as RulingCard;

  @Input() public type = this.viewType.grid;

  constructor(private imageHelperService: ImageHelperService, private rulingsService: RulingsService) {}

  @Input()
  public set ruling(rulingCard: RulingCard) {
    const { photo } = rulingCard;

    this.imageResources = this.imageHelperService.getImageResources(photo, constants.imageBasePath);
    this.rulingCard = rulingCard;

    this.updatePositiveState();
  }

  public get ruling(): RulingCard {
    return this.rulingCard;
  }

  /**
   * Updates vote values
   *
   * @param isPositiveVote - Vote value
   */
  public updateVotes(isPositiveVote: boolean): void {
    const { id } = this.rulingCard;
    const operation = isPositiveVote
      ? this.rulingsService.updatePositiveVotes(id)
      : this.rulingsService.updateNegativeVotes(id);

    operation.subscribe((response: VoteResponse | undefined) => this.handleVoteResponse(response));
  }

  /**
   * Handles vote operation response
   *
   * @param response - API response
   */
  private handleVoteResponse(response: VoteResponse | undefined): void {
    const { votes } = this.rulingCard;

    if (response) {
      votes.negative = response.positiveVotes;
      votes.positive = response.negativeVotes;

      this.updatePositiveState();
    }
  }

  /**
   * Updates positive state for ruling card
   */
  private updatePositiveState(): void {
    this.isPositiveState = this.rulingCard.votes.positive >= this.rulingCard.votes.negative;
  }
}
