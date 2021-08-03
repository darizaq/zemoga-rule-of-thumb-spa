export const mockRulingsListResponse = {
  data: {
    listCelebrities: {
      items: [
        {
          id: 'id',
          category: 'category',
          description: 'mock description',
          lastUpdated: '2021-02-26T23:44:50.326Z',
          name: 'Name Lastname',
          photo: {
            resolution1x: 'resource.png',
            resolution2x: 'resource@2x.png'
          },
          negativeVotes: 2,
          positiveVotes: 2
        }
      ]
    }
  }
};

export const mockRulingsList = [
  {
    id: 'id',
    category: 'category',
    description: 'mock description',
    lastUpdated: '2021-02-26T23:44:50.326Z',
    name: 'Name Lastname',
    photo: {
      resolution1x: 'resource.png',
      resolution2x: 'resource@2x.png'
    },
    votes: {
      negative: 2,
      positive: 2
    }
  }
];
