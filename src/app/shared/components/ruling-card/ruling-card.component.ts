import { Component, Input } from '@angular/core';

import { ImageHelperService } from '@core/services/image-helper/image-helper.service';
import { ImageResource, RulingCard } from '@core/interfaces';
import { mockRulingCard } from '@mocks/ruling-card.mock';
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
  public ruling: RulingCard;
  public viewType = rulingsConstants.viewType;

  @Input() public type = this.viewType.grid;

  constructor(private imageHelperService: ImageHelperService) {
    this.ruling = mockRulingCard;
    this.imageResources = this.imageHelperService.getImageResources(this.ruling.photo, constants.imageBasePath);

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
