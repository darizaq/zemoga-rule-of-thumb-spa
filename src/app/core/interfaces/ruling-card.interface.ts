export interface RulingCard {
  category: string;
  description: string;
  id: string;
  lastUpdated: string;
  name: string;
  photo: {
    resolution1x: string;
    resolution2x: string;
  };
  votes: {
    negative: number;
    positive: number;
  };
}
