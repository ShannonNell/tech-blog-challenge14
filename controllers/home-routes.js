const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('homepage', {
      id: 1,
      content: 'Hello. My name is Harry Potter.',
      title: 'Who am I?',
      created_at: new Date(),
      comments: [{}, {}],
      user: {
          username: 'Harry Potter'
      }
  });
});

module.exports = router;