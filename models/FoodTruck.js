const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodTruckSchema = new Schema({
  sid: { type: String },
  id: { type: String },
  position: { type: Number },
  Applicant: { type: String },
  FacilityType: { type: String },
  LocationDescription: { type: String },
  Address: { type: String },
  Status: { type: String },
  FoodItems: { type: String },
  location: {
    type: { type: String },
    coordinates: [Number],
  },
});

foodTruckSchema.index({ location: '2dsphere' });

const FoodTruck = mongoose.model('FoodTruck', foodTruckSchema);
module.exports = FoodTruck;
