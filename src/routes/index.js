let axios = require("axios");
let express = require("express"),
    router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
    res.json({
        title: "Express"
    });
});

router.post("/", (req, res, next) => {
    axios({
        method: "post",
        url: `http://${process.env.ANALYTICS_IP}:3002/analyse/sentiment`,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
        },
        data: {
            sentence: req.body.text
        }
    }).then((response) => {
        console.log(response);
        res.json({
            // what's the data given SA machine?
            title: response.data.polarity
        });
    })
    .catch((error) => {
        console.log(error);
    });
});

module.exports = router;
