var express = require('express');
router = express.Router();

router.get('/:id', (req, res) => {
    res.render('index', { query: req.params.id})
})

module.exports = router;