export interface RulingItemResponse {
  category: string;
  description: string;
  id: string;
  lastUpdated: string;
  name: string;
  photo: {
    resolution1x: string;
    resolution2x: string;
  };
  negativeVotes: number;
  positiveVotes: number;
}
