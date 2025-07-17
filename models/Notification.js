const NotificationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  message: String,
  type: { type: String, enum: ['booking', 'system', 'review'] },
  read: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});