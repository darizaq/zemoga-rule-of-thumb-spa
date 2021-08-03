import { Component, Input } from '@angular/core';

import { errorMessageConstants as constants } from './error-message.constants';

@Component({
  selector: 'zmg-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent {
  @Input() public translateKey = constants.defaultKey;
}
