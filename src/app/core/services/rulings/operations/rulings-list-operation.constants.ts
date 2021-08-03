import { gql } from 'apollo-angular';

const query = gql`
  query listCelebrities($listCelebritiesInput: TableCelebrityFilterInput) {
    listCelebrities(filter: $listCelebritiesInput) {
      items {
        id
        category
        description
        lastUpdated
        name
        photo {
          resolution1x
          resolution2x
        }
        negativeVotes
        positiveVotes
      }
    }
  }
`;

const variables = {
  listCelebritiesInput: {
    hero: {
      ne: true
    }
  }
};

export const rulingsListOperation = { query, variables };
