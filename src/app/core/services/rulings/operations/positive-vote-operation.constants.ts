import { gql } from 'apollo-angular';

const mutationQuery = gql`
  mutation addPositiveVote($voteCelebrityInput: VoteCelebrityInput!) {
    addPositiveVote(input: $voteCelebrityInput) {
      id
      positiveVotes
      negativeVotes
    }
  }
`;

export const positiveVoteOperation = { mutationQuery };
