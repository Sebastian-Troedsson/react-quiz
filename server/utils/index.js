/**
 * Helper function to remove Science or Entertainment string from some categories.
 * @param {object} data Object that contains list of all categories.
 * @returns {array} New formatted categories.
 */
const formatCategoryName = (data) => {
  const regex = /Science:\s|Entertainment:\s/g;
  return data.trivia_categories.map((category) => ({ ...category, name: category.name.replace(regex, '') }));
};

/**
 * Helper fnction to format questions needed for client side.
 * @param {object} data  Object that contains all questions.
 * @returns {array} New formatted questions.
 */
const formatQuestions = (data) => (
  data.results.map((item) => ({
    question: item.question,
    type: item.type,
    correct: item.correct_answer,
    incorrect: item.incorrect_answers,
  }))
);

module.exports = {
  formatCategoryName,
  formatQuestions,
};
