const router = require('express').Router();

const {getBossRating} = require ('../models/home.js');

router.route('/home')
  .get(getBossRating, (req, res) =>
    r.json(res.ratings));

module.exports = router;
