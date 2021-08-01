export interface RulingCard {
  category: string;
  description: string;
  lastUpdated: string;
  name: string;
  photo: {
    '1x': string;
    '2x': string;
  };
  votes: {
    negative: number;
    positive: number;
  };
}
