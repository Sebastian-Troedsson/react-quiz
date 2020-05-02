const request = require('supertest');
const moxios = require('moxios');

const server = require('../server');

describe('questions route', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('responds correctly for getting all categories', async () => {
    const triviaCategories = [
      {
        id: 1,
        name: 'Art',
      },
      {
        id: 2,
        name: 'Science',
      },
    ];

    const mockData = {
      trivia_categories: triviaCategories,
    };

    moxios.wait(() => {
      const moxiosReq = moxios.requests.mostRecent();
      moxiosReq.respondWith({
        status: 200,
        response: mockData,
      });
    });

    const res = await request(server)
      .get('/api/questions/categories')
      .expect(200);

    expect(res.body).toEqual(triviaCategories);
  });

  it('responds correctly for getting questions about a specific category', async () => {
    const mockData = {
      response_code: 0,
      results: [
        {
          category: 'Entertainment: Books',
          type: 'multiple',
          difficulty: 'hard',
          question: 'Abel Magwitch is a character from which Charles Dickens novel?',
          correct_answer: 'Great Expectations',
          incorrect_answers: [
            'The Pickwick Papers',
            'Nicholas Nickleby',
            'Oliver Twist',
          ],
        },
        {
          category: 'Entertainment: Books',
          type: 'multiple',
          difficulty: 'medium',
          question: 'Who wrote the children\'s story "The Little Match Girl"?',
          correct_answer: 'Hans Christian Andersen',
          incorrect_answers: [
            'Charles Dickens',
            'Lewis Carroll',
            'Oscar Wilde',
          ],
        },
      ],
    };

    const expected = [
      {
        question: 'Abel Magwitch is a character from which Charles Dickens novel?',
        type: 'multiple',
        correct: 'Great Expectations',
        incorrect: [
          'The Pickwick Papers',
          'Nicholas Nickleby',
          'Oliver Twist',
        ],
      },
      {
        question: 'Who wrote the children\'s story "The Little Match Girl"?',
        type: 'multiple',
        correct: 'Hans Christian Andersen',
        incorrect: [
          'Charles Dickens',
          'Lewis Carroll',
          'Oscar Wilde',
        ],
      },
    ];

    moxios.wait(() => {
      const moxiosReq = moxios.requests.mostRecent();
      moxiosReq.respondWith({
        status: 200,
        response: mockData,
      });
    });

    const res = await request(server)
      .get('/api/questions/id/10')
      .expect(200);

    expect(res.body).toEqual(expected);
  });
});
