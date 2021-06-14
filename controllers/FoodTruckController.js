const router = require('express').Router();
const FoodTruck = require('../models/FoodTruck');
// const data = require('../data.json');

router.get('/search', async (req, res) => {
  const long = req.query.long;
  const lat = req.query.lat;
  // FoodTruck.aggregate(
  //   [
  //     {
  //       $geoNear: {
  //         near: {
  //           type: 'Point',
  //           coordinates: [long, lat],
  //         },
  //         spherical: true,
  //         distanceField: 'dist',
  //       },
  //     },
  //     { $skip: 0 },
  //     { $limit: 2 },
  //   ],
  //   function (err, shapes) {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       res.send(shapes);
  //     }
  //   }
  //console.log( shapes );
  FoodTruck.find({
    location: {
      $near: {
        $maxDistance: 10000000,
        $geometry: { type: 'Point', coordinates: [long, lat] },
      },
    },
  })
    .limit(5)
    .exec((err, docs) => {
      if (err) {
        res.status(500).json({ status: false, message: err });
      } else {
        res.json({ status: true, result: docs });
      }
    });
  // );
});

module.exports = router;
