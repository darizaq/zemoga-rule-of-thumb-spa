import { Component, Input } from '@angular/core';

import { ImageHelperService } from '@core/services/image-helper/image-helper.service';
import { ImageResource, RulingCard } from '@core/interfaces';
import { rulingCardConstants as constants } from './ruling-card.constants';
import { rulingsConstants } from '@shared/components/rulings/rulings.constants';

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

  constructor(private imageHelperService: ImageHelperService) {}

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
    isPositiveVote ? (this.ruling.votes.positive += 1) : (this.ruling.votes.negative += 1);

    this.updatePositiveState();
  }

  /**
   * Updates positive state for ruling card
   */
  private updatePositiveState(): void {
    this.isPositiveState = this.rulingCard.votes.positive >= this.rulingCard.votes.negative;
  }
}
