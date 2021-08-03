import { VoteResponse } from './vote-response.interface';

export interface VoteMutationResponse {
  addNegativeVote?: VoteResponse;
  addPositiveVote?: VoteResponse;
}
