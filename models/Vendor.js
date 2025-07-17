const VendorSchema = new mongoose.Schema({
  name: String,
  type: String, // "henna", "pandit", etc.
  images: [String],
  description: String,
  priceRange: String,
  location: String,
  availability: [Date],
  reviews: [{ userId: ObjectId, rating: Number, comment: String }]
});