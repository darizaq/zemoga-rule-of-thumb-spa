import { RulingItemResponse } from './ruling-item-response.interface';

export interface RulingsListResponse {
  listCelebrities: {
    items: Array<RulingItemResponse>;
  };
}
