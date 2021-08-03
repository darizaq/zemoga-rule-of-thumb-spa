import { Component, OnInit } from '@angular/core';

import { RulingCard } from '@core/interfaces';
import { RulingsService } from '@core/services/rulings/rulings.service';

@Component({
  selector: 'zmg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public hasError = false;
  public items: Array<RulingCard> = [];

  constructor(private rulingsService: RulingsService) {}

  public ngOnInit(): void {
    this.rulingsService.getRulingsList().subscribe(
      (result: Array<RulingCard>) => this.rulingsListSuccess(result),
      () => this.rulingsListError()
    );
  }

  /**
   * Handler for Rulings list service success response
   *
   * @param result - Service response
   */
  private rulingsListSuccess(result: Array<RulingCard>): void {
    this.items = result;
    this.hasError = false;
  }

  /**
   * Handler for rulings list service error response
   */
  private rulingsListError(): void {
    this.hasError = true;
  }
}
