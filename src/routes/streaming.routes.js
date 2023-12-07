const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => { res.redirect('server.html'); })

module.exports = router;