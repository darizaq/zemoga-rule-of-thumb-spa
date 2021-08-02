import { gql } from 'apollo-angular';

const mutationQuery = gql`
  mutation addNegativeVote($voteCelebrityInput: VoteCelebrityInput!) {
    addNegativeVote(input: $voteCelebrityInput) {
      id
      positiveVotes
      negativeVotes
    }
  }
`;

export const negativeVoteOperation = { mutationQuery };
