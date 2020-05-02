const router = require('express').Router();
const axios = require('axios');

const { formatCategoryName, formatQuestions } = require('../utils');

router.get('/id/:id', (req, res) => {
  const { id } = req.params;
  axios.get(`https://opentdb.com/api.php?amount=10&category=${id}`)
    .then((data) => res.json(formatQuestions(data.data)));
});

router.get('/categories', (req, res) => {
  axios.get('https://opentdb.com/api_category.php')
    .then((data) => res.json(formatCategoryName(data.data)));
});

module.exports = router;
