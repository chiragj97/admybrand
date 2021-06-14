const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
// const data = require('./data.json');
require('dotenv').config();
app.use(bodyParser());
app.use(cors());
// const FoodTruck = require('./models/FoodTruck');
// console.log(data.data[0]);
// console.log(data.data[0][22]);
// data.data.map((a) => {
//   const details = {
//     sid: a[0],
//     id: a[1],
//     position: a[2],
//     Applicant: a[9],
//     FacilityType: a[10],
//     LocationDescription: a[12],
//     Address: a[13],
//     Status: a[18],
//     FoodItems: a[19],
//     location: {
//       type: 'Point',
//       coordinates: [a[23], a[22]],
//     },
//   };

//   const foodTruck = new FoodTruck(details);
//   foodTruck.save();
// });
// console.log(data.meta.view.columns.map((c) => c.name));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully !');
});

const locationRouter = require('./controllers/FoodTruckController');
app.use('/location', locationRouter);

app.get('/', (req, res) => {
  res.send('Welcome');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started running on port ${PORT}`));
