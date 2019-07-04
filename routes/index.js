let express = require("express"),
    router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
    res.json({title: "Express"});
});

router.post("/", (req, res, next) => {
    console.log(req.body);
    res.json({title: req.body.text});
});

module.exports = router;
