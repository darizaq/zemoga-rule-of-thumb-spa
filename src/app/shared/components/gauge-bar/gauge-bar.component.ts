import { Component, Input } from '@angular/core';

import { gaugeBarConstants as constants } from './gauge-bar.constants';

@Component({
  selector: 'zmg-gauge-bar',
  templateUrl: './gauge-bar.component.html',
  styleUrls: ['./gauge-bar.component.scss']
})
export class GaugeBarComponent {
  @Input() public showBigBar = false;

  public negativePercentage = constants.defaultValue;
  public positivePercentage = constants.defaultValue;

  private negativeCount = constants.defaultValue;
  private positiveCount = constants.defaultValue;

  @Input()
  public set negative(negativeCount: number) {
    this.negativeCount = negativeCount;

    this.updatePercentages();
  }

  public get negative(): number {
    return this.negativeCount;
  }

  @Input()
  public set positive(positiveCount: number) {
    this.positiveCount = positiveCount;

    this.updatePercentages();
  }

  public get positive(): number {
    return this.positiveCount;
  }

  /**
   * Updates poll percentages
   */
  private updatePercentages(): void {
    const total = this.positive + this.negative;
    const negative = (this.negative * constants.percentFactor) / total;
    const positive = (this.positive * constants.percentFactor) / total;

    this.negativePercentage = this.getPercentageValue(negative);
    this.positivePercentage = this.getPercentageValue(positive);
  }

  /**
   * Gets percentage view value
   *
   * @param value - Percentage number value
   * @returns Percentage value
   */
  private getPercentageValue(value: number): number {
    return Math.round(value) !== value ? Number(value.toFixed(constants.decimalsLimit)) : value;
  }
}
