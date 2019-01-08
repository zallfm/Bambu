// initialize express router
let mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
// routing models
let People = mongoose.model('People');
// initialize express router
let router = require('express').Router();

let ObjectId = require("mongodb").ObjectId;
// set default API response message
router.get('/', (req, res) => {
    res.json
    ({
        status: 'API Its Working',
        message: 'Welcome to bambuApi crafted with love!, access API localhost:9999/people-like-you?age=...' ,
        addScore: 'Access to add score http://localhost:9999/addscore/(id_number) with value = 0.1',
    });
});

// display result api & routing GET with search
router.get('/people-like-you',(req, res, next) => {
    let query = {};

    if (req.query.age) {
        query.age = req.query.age;
    }
    if(req.query.latitude) {
        query.latitude = req.query.latitude;
    }
    if (req.query.longitude) {
        query.longitude = req.query.longitude;
    }
    if(req.query.experienced) {
        query.experienced = req.query.experienced;
    }

    People.find(query)
        .select('name age latitude longitude monthlyIncome experienced score')
        // limit data result
        //.limit(99)
        // sort ascending
        .sort( { score: -1 } )
        .exec(function (err, peoples){
            if(err) return next(err);
            let peopleLikeYou = {
                peopleLikeYou : peoples
            }
            res.json(peopleLikeYou)
        });
});

// get api to updatescore
router.get('/addscore/:id', (req, res, next) => {
    let id = req.params.id;
    People.findOneAndUpdate(
        {_id: id, score: { $lt: 1 } },
        { $inc: { score: 0.1 } },
        { new:true}
        )
        .exec(function(err, result){
            console.log(err, result)
            if(err) return next(err);
            res.json(result);
        });
});

// export API routes
module.exports = router;