const { formatCategoryName } = require('.');

describe('formatCategoryName', () => {
  it('should correctly remove `Science: ` and `Entertainment: `', () => {
    const mockData = {
      trivia_categories: [
        {
          id: 1,
          name: 'Science: Math',
        },
        {
          id: 2,
          name: 'Entertainment: Film',
        },
      ],
    };

    const expected = [
      {
        id: 1,
        name: 'Math',
      },
      {
        id: 2,
        name: 'Film',
      },
    ];

    const result = formatCategoryName(mockData);
    expect(result).toEqual(expected);
  });
});
