import { Component, Input } from '@angular/core';

import { mockRulingCard } from '@mocks/ruling-card.mock';
import { RulingCard } from '@core/interfaces';
import { rulingsConstants } from '@shared/components/rulings/rulings.constants';
import { rulingCardConstants as constants } from './ruling-card.constants';

@Component({
  selector: 'zmg-ruling-card',
  templateUrl: './ruling-card.component.html',
  styleUrls: ['./ruling-card.component.scss']
})
export class RulingCardComponent {
  public imagePath = constants.imageBasePath;
  public isPositiveState: boolean;
  public ruling: RulingCard;
  public viewType = rulingsConstants.viewType;

  @Input() public type = this.viewType.grid;

  constructor() {
    this.ruling = mockRulingCard;
    this.isPositiveState = mockRulingCard.votes.positive >= mockRulingCard.votes.negative;
  }
}
